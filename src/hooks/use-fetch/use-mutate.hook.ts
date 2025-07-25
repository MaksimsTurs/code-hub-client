import type { TUseFetchSliceState } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TStoreDispatch, TStoreRootState } from "@reducer/reducer.store";
import type { TUseMutateReturn, TUseMutateFunction } from "./use-mutate.hook.type";
import type { RefObject } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import mutate from "@reducer/use-fetch/action/mutate.action";

import getStateFromCache from "./utils/get-state-from-cache.util";

export default function useMutate<R, B, S>(key: string, func: TUseMutateFunction<R, B, S>): TUseMutateReturn<S> {
	const dispatch = useDispatch<TStoreDispatch>();
	const { cache } = useSelector<TStoreRootState, TUseFetchSliceState>(state => state.useFetch);
	const prevKey: RefObject<string> = useRef<string>(key);

	return {
		// @ts-ignore
		...getStateFromCache<S>(cache[key]?.state),
		mutate: function<B>(body: B): void {
			dispatch(mutate({ currKeys: [key], prevKeys: [prevKey.current], func, body, currState: cache[key]?.state.data }));
			prevKey.current = key;
		}
	}
};