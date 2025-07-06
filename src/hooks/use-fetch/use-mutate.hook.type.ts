import type { TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

export type TUseMutateReturn<T> = {
	mutate: <B = any>(body: B) => void
} & TUseFetchCacheState<T>;

export type TUseMutateFunction<R, B, S> = (body: B, currState: S) => Promise<R>;