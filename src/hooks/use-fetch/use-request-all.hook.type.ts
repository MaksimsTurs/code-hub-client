import type { TUseFetchCacheState } from "@/reducers/use-fetch/use-fetch.slice.type";
import type { TFetcherReturn } from "@/utils/fetcher/fetcher.util.type";

export type TUseRequestAllOptions = {
	refetchOnlyWhenAllDepsChanged?: boolean
	defaultValue?: any
};

export type TUseRequestAllReturn = {
	requestAll: () => void
} & TUseRequestAllReturnState;

export type TUseRequestAllCallbackReturn<R> = Promise<TFetcherReturn<R, unknown>>;

export type TUseRequestAllReturnState = {
	isLoading: boolean
	isPending: boolean
	data: Map<string, TUseFetchCacheState>
};