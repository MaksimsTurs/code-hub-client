import type { TUseFetchCacheState, TUseFetchCacheMap } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TUseRequestAllOptions } from "../use-request-all.hook.type";

import getStateFromCache from "./get-state-from-cache.util";

export default function createDataFromUsedKeys(newKeys: string[], prevKeys: string[], cache: TUseFetchCacheMap, options?: TUseRequestAllOptions): Required<Omit<TUseFetchCacheState, "error">> {
	const states: Map<string, TUseFetchCacheState<any>> = new Map<string, TUseFetchCacheState<any>>();
	const length: number = newKeys.length;
	
	let isPending: boolean = false;
	let isLoading: boolean = false;
	let index: number = 0;

	while(index < length) {
		const newKey: string = newKeys[index];
		const prevKey: string = prevKeys[index];

		const prevState: TUseFetchCacheState<any> | undefined = cache[prevKey]?.state;
		const newState: TUseFetchCacheState<any> =  options?.defaultValue || getStateFromCache(cache[newKey]?.state);

		states.set(newKey, newState);

		if(!isPending && (prevState || newState).isPending) {
			isPending = (prevState || newState).isPending;
		}

		if(!isLoading && (prevState || newState).isLoading) {
			isLoading = (prevState || newState).isLoading;
		}

		index++;
	}

	return { isLoading, isPending, data: states };
}