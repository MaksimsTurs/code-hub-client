import type { TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

export type TUseRequestReturn<T = any> = {
	request: () => void
} & TUseFetchCacheState<T>;

export type TUseRequestOptions = {
	noCaching?: boolean
};