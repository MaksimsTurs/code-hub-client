import type { TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";

export type TUseFetchReturn = {
	getNamedState: <R = unknown, E = unknown>(name: string) => TUseFetchCacheState<R, E> | undefined
	setNamedStateError: (name: string, error: unknown) => void;
	invalidateCache: (name: string) => void
};

export type TUseFetchCallback<R = unknown, E = unknown> = () => Promise<TFetcherReturn<R, E>>;