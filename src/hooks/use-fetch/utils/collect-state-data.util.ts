import type { TUseFetchCacheMap, TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

export default function collectStateData<R = unknown, E = unknown>(currDep: string, prevDep: string, cache: TUseFetchCacheMap): TUseFetchCacheState<R, E> {
	const currState = cache[currDep]?.state as TUseFetchCacheState<R, E> | undefined;
	const prevState = cache[prevDep]?.state as TUseFetchCacheState<R, E> | undefined;

	const state: TUseFetchCacheState<R, E> = {
		isPending: prevState?.isPending || currState?.isPending || true,
		isLoading: (!prevState?.isLoading || !currState?.isLoading),
		data: currState?.data || prevState?.data as R,
		error: currState?.error || prevState?.error as E
	};

	return currState ? currState : state;
};