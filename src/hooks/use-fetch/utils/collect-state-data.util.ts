import type { TUseFetchCacheMap, TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

import getStateFromCache from "./get-state-from-cache.util";

export default function collectStateData(currDep: string, prevDep: string, cache: TUseFetchCacheMap): TUseFetchCacheState {
	const prevState = cache[prevDep]?.state;
	const currState = getStateFromCache(cache[currDep]?.state);
	
	if(!currState && prevState) {
		return {...prevState, isLoading: false, isPending: true };
	}

	return {...currState, data: prevState?.data, isLoading: false };
}