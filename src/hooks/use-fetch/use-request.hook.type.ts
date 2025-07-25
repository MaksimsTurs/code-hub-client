import type { TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

export type TUseRequestReturn<R = unknown, E = unknown> = {
	request: () => void
} & TUseFetchCacheState<R, E>;

export type TUseRequestFetchOptions<R = unknown, E = unknown> = {
	args: any[]
	key: string
	callback: TUseRequestCallback<R, E>
}

export type TUseRequestOptions = {
	noCaching?: boolean
};

export type TUseRequestCallback<R = unknown, E = unknown> = (...args: any[]) => TUseRequestCallbackReturn<R | null, E | null>;

export type TUseRequestCallbackReturn<R = unknown, E = unknown> = Promise<TUseRequestCallbackReturnData<R | null, E | null>>;

export type TUseRequestCallbackReturnData<D = unknown, E = unknown> = {
	data?: D
	error?: E
};