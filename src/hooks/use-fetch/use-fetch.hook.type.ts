import type { TUseFetchCacheState } from "@/reducers/use-fetch/use-fetch.slice.type";
import type { TFetcherReturn } from "@/utils/fetcher/fetcher.util.type";

export type TUseFetchReturn = {
	getNamedState: <R = unknown>(name: string) => TUseFetchCacheState<R> | undefined
	invalidateCache: (name: string) => void
};

export type TUseFetchCallback<R = unknown, E = unknown> = () => Promise<TFetcherReturn<R, E>>;