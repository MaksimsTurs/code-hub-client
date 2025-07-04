import type { TUseMutateFunction } from "@/hooks/use-fetch/use-mutate.hook.type";
import type { TUseFetchCallback } from "@/hooks/use-fetch/use-fetch.hook.type";
import type { TFetcherReturn } from "@/utils/fetcher/fetcher.util.type";

export type TUseFetchSliceState = {
	globalIsLoading: boolean
	globalIsPending: boolean
	globalError?: unknown
	cache: TUseFetchCacheMap
};

export type TUseFetchCacheMap = Record<string, TUseFetchCacheItem<any>>;

export type TUseFetchCacheItem<T = any> = {
	state: TUseFetchCacheState<T>
};

export type TUseFetchCacheState<T = any> = {
	isLoading: boolean
	isPending: boolean
	error?: unknown
	data?: T | null
};

export type TUseFetchActionsReturn<R = any> = {
	newKeys: string[]
	prevKeys: string[]
	data: R
};

export type TUseRequestAllActionParam = {
	newKeys: string[]
	prevKeys: string[]
	promises: Promise<TFetcherReturn<unknown, unknown>>[]
};

export type TUseRequestAllActionReturnData = PromiseSettledResult<TFetcherReturn<unknown, unknown>>[];

export type TUseRequestActionParam = {
	newKeys: string[]
	prevKeys: string[]
	func: TUseFetchCallback
};

export type TUseMutateActionParam = {
	newKeys: string[]
	prevKeys: string[]
	func: TUseMutateFunction<any, any, any>
	body: any
	currState: any
}

export type TUseFetchErrorResponse = {
	message: string
	code: number
};
