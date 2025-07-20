import type { TStoreDispatch, TStoreRootState } from "@reducer/reducer.store";
import type { TUseFetchSliceState } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TUseRequestAllOptions, TUseRequestAllReturn } from "./use-request-all.hook.type";
import type { TUseFetchCallback } from "./use-fetch.hook.type";
import type { RefObject } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import areAllDepsNotEqual from "./utils/are-all-deps-not-equal.util";
import collectPromises from "./utils/collect-promises.util";
import createDataFromUsedKeys from "./utils/create-data-from-used-keys.util";
import { isUndefinedOrNull } from "./utils/is.util";

import assert from "@util/assert/assert.util";

import requestAll from "@reducer/use-fetch/action/request-all.action";

export default function useRequestAll(deps: string[], fetches: TUseFetchCallback[], options?: TUseRequestAllOptions): TUseRequestAllReturn {
	const dispatch = useDispatch<TStoreDispatch>();
	const { cache } = useSelector<TStoreRootState, TUseFetchSliceState>(rootState => rootState.useFetch);
	const prevDeps: RefObject<string[]> = useRef<string[]>(deps);

	assert(
		Error,
		`Count of deps(${deps.length}) is not matching the count of fetches(${fetches.length})!`,
		deps.length !== fetches.length
	);
	assert(
		Error,
		`Count of prevDeps(${prevDeps.current.length}) is not matching the count of deps(${deps.length})!`,
		deps.length !== prevDeps.current.length
	);

	useEffect(() => {		
		if((!isUndefinedOrNull(options?.refetchOnlyWhenAllDepsChanged) && areAllDepsNotEqual(deps, prevDeps.current)) || 
			 isUndefinedOrNull(options?.refetchOnlyWhenAllDepsChanged)) {
			dispatch(requestAll({ promises: collectPromises(fetches), newKeys: deps, prevKeys: prevDeps.current }));
			prevDeps.current = deps;
		}

	}, deps);

	function manualRequestCall(): void {
		dispatch(requestAll({ promises: collectPromises(fetches), newKeys: deps, prevKeys: prevDeps.current }));
	};

	return {
		...createDataFromUsedKeys(deps, prevDeps.current, cache, options),
		requestAll: manualRequestCall
	};
};