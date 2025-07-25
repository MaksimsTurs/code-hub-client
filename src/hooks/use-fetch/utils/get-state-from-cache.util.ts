import type { TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";

const getStateFromCache = <T = any>(data?: TUseFetchCacheState<T>): TUseFetchCacheState<T, unknown> => data ? data : { error: null, data: null, isLoading: true, isPending: true };

export default getStateFromCache;