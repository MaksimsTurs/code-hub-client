import type { TUseFetchSliceState, TUseFetchCacheItem } from "./use-fetch.slice.type";
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import request from "./action/request.action";
import requestAll from "./action/request-all.action";
import mutate from "./action/mutate.action";

import updateCacheItem from "./utils/update-cache-item.util.slice";

const initUseFetchState: TUseFetchSliceState = {
	globalIsLoading: false,
	globalIsPending: false,
	globalError: undefined,
	cache: {},
};

const useFetchSlice = createSlice({
	name: "use-fetch",
	initialState: initUseFetchState,
	reducers: {
		setNamedStateError: function(store, action: PayloadAction<{name:string,error:unknown}>) {
			store.cache[action.payload.name].state.error = action.payload.error;
		},
		invalidateCache: function(store, action: PayloadAction<string>) {
			if(action.payload in store.cache) {
				delete store.cache[action.payload];
			}
		}
	},
	extraReducers: function(builder) {
		builder
			.addCase(request.pending, function(store, action: ReturnType<typeof request.pending>) {
				const currKey: string = action.meta.arg.newKeys[0];
				const prevKey: string = action.meta.arg.prevKeys[0];
				const currItem: TUseFetchCacheItem = store.cache[prevKey] || {};
				
				updateCacheItem(
					currKey,
					prevKey,
					store,
					{ data: currItem?.state?.data || null, error: null, isLoading: currItem?.state?.isLoading === undefined, isPending: true }
				);
			})
			.addCase(request.rejected, function(store, action: ReturnType<typeof request.rejected>) {
				updateCacheItem(
					action.meta.arg.newKeys[0], 
					action.meta.arg.prevKeys[0], 
					store, 
					{ error: action.payload, isLoading: false, isPending: false }
				);
			})
			.addCase(request.fulfilled, function(store, action: ReturnType<typeof request.fulfilled>) {
				updateCacheItem(
					action.meta.arg.newKeys[0],
					action.meta.arg.prevKeys[0], 
					store, 
					{ error: null, data: action.payload.data, isLoading: false, isPending: false }
				);
			})
			.addCase(requestAll.pending, function(store, action: ReturnType<typeof requestAll.pending>) {
				const length: number = action.meta.arg.newKeys.length;

				let index: number = 0;

				while(index < length) {
					const currItem: TUseFetchCacheItem = store.cache[action.meta.arg.prevKeys[index]] || {};
					
					updateCacheItem(
						action.meta.arg.newKeys[index],
						action.meta.arg.prevKeys[index],
						store,
						{ data: currItem?.state?.data || null, error: null, isLoading: currItem?.state?.isLoading === undefined, isPending: true }
					);

					index++;
				}
			})
			.addCase(requestAll.rejected, function(store, action: ReturnType<typeof requestAll.rejected>) {
				const length: number = action.meta.arg.newKeys.length;
					
				let index: number = 0;

				while(index < length) {
					updateCacheItem(
						action.meta.arg.newKeys[index], 
						action.meta.arg.prevKeys[index], 
						store, 
						{ error: { code: 0, message: action.error.message! }, isLoading: false, isPending: false }
					);

					index++;
				}
			})
			.addCase(requestAll.fulfilled, function(store, action: ReturnType<typeof requestAll.fulfilled>) {
				const length: number = action.payload.data.length;

				let index: number = 0;

				while(index < length) {
					// @ts-ignore
					const { data, error } = action.payload.data[index].value;

					if(error) {
						updateCacheItem(
							action.meta.arg.newKeys[index], 
							action.meta.arg.prevKeys[index], 
							store, 
							{ 
								isLoading: false, 
								isPending: false, 
								error: { code: "code" in error ? error.code : 0, message: error.message }
							}
						);
					} else if(data) {
						updateCacheItem(
							action.meta.arg.newKeys[index], 
							action.meta.arg.prevKeys[index], 
							store, 
							{ isLoading: false, isPending: false, data }
						);
					}
					
					index++;
				}
			})
			.addCase(mutate.pending, function(store, action: ReturnType<typeof mutate.pending>) {
				const currKey: string = action.meta.arg.newKeys[0];
				const prevKey: string = action.meta.arg.prevKeys[0];
				const currItem: TUseFetchCacheItem = store.cache[prevKey] || {};

				updateCacheItem(
					currKey,
					prevKey,
					store, 
					{ isLoading: currItem?.state?.isLoading === undefined ? true : false, isPending: true }
				);
			})
			.addCase(mutate.rejected, function(store, action: ReturnType<typeof mutate.rejected>) {
				updateCacheItem(
					action.meta.arg.newKeys[0], 
					action.meta.arg.newKeys[0], 
					store, 
					{ error: action.payload, isLoading: false, isPending: false }
				);
			})
			.addCase(mutate.fulfilled, function(store, action: ReturnType<typeof mutate.fulfilled>) {
				updateCacheItem(
					action.meta.arg.newKeys[0], 
					action.meta.arg.newKeys[0], 
					store, 
					{ data: action.payload.data, isLoading: false, isPending: false }
				);
			})
		},
});

export const {
	invalidateCache,
	setNamedStateError
} = useFetchSlice.actions;

export default useFetchSlice.reducer;