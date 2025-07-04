import type { Draft } from "@reduxjs/toolkit";
import type { TUseFetchCacheItem, TUseFetchCacheState, TUseFetchSliceState  } from "../use-fetch.slice.type";

export default function updateCacheItem(newKey: string, prevKey: string, store: Draft<TUseFetchSliceState>,  newState: TUseFetchCacheState): void {
	const currItem: TUseFetchCacheItem = store.cache[prevKey] || {};
	const currItemState: TUseFetchCacheState = currItem?.state || {}
	
	store.cache[newKey] = {
		...currItem, 
		state: {
			...currItemState,
			...newState 
		}
	};
}