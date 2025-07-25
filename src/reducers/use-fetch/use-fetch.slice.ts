import type { TUseFetchSliceState, TUseFetchCacheItem } from "./use-fetch.slice.type";
import type { PayloadAction, Draft, __DO_NOT_USE__ActionTypes } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import request from "./action/request.action";
import mutate from "./action/mutate.action";

import updateCacheItem from "./utils/update-cache-item.util.slice";

const initUseFetchState: TUseFetchSliceState = {
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
			.addCase(request.pending, function(store: Draft<TUseFetchSliceState>, action: ReturnType<typeof request.pending>) {
				const currKey: string = action.meta.arg.currKeys[0];
				const prevKey: string = action.meta.arg.prevKeys[0];
				const prevItem: TUseFetchCacheItem<unknown, unknown> = store.cache[prevKey] || {};

				store.cache = {
					...store.cache,
					[currKey]: {
						state: {
							isPending: true,
							isLoading: prevItem?.state?.isLoading === undefined,
							data: prevItem?.state?.data,
							error: prevItem?.state?.error
						}
					}
				};
			})
			.addCase(request.rejected, function(store: Draft<TUseFetchSliceState>, action: ReturnType<typeof request.rejected>) {
				const currKey: string = action.meta.arg.currKeys[0];

				store.cache = {
					...store.cache,
					[currKey]: {
						state: {
							...store.cache[currKey]?.state,
							isPending: false,
							isLoading: false,
							error: action.payload || action.error
						}
					}
				};
			})
			.addCase(request.fulfilled, function(store, action: ReturnType<typeof request.fulfilled>) {
				const currKey: string = action.meta.arg.currKeys[0];
				
				store.cache = {
					...store.cache,
					[currKey]: {
						state: {
							data: action.payload.data,
							isPending: false,
							isLoading: false,
							error: null
						}
					}
				};
			})
			.addCase(mutate.pending, function(store, action: ReturnType<typeof mutate.pending>) {
				const currKey: string = action.meta.arg.currKeys[0];
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
					action.meta.arg.currKeys[0], 
					action.meta.arg.currKeys[0], 
					store, 
					{ error: action.payload, isLoading: false, isPending: false }
				);
			})
			.addCase(mutate.fulfilled, function(store, action: ReturnType<typeof mutate.fulfilled>) {
				updateCacheItem(
					action.meta.arg.currKeys[0], 
					action.meta.arg.currKeys[0], 
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