import type { TUseFetchReturn } from "./use-fetch.hook.type";
import type { TUseFetchSliceState, TUseFetchCacheState } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TStoreRootState, TStoreDispatch } from "@reducer/reducer.store";

import { useDispatch, useSelector } from "react-redux";

import { invalidateCache, setNamedStateError } from "@reducer/use-fetch/use-fetch.slice";

import useRequest from "./use-request.hook";

export default function useFetch(): TUseFetchReturn {
	const dispatch = useDispatch<TStoreDispatch>();
	const { cache } = useSelector<TStoreRootState, TUseFetchSliceState>(state => state.useFetch);

	return {
		getNamedState: function<R = unknown, E = unknown>(name: string): TUseFetchCacheState<R, E> | undefined {
			return cache[name]?.state as TUseFetchCacheState<R, E> | undefined;
		},
		setNamedStateError: function(name: string, error: unknown): void {
			dispatch(setNamedStateError({ name, error }))
		},
		invalidateCache: function(name: string): void {
			dispatch(invalidateCache(name));
		}
	};
};

export {
	useRequest
};