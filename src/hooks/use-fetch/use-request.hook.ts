import type { TStoreDispatch, TStoreRootState } from "@reducer/reducer.store";
import type { TUseFetchCacheState, TUseFetchSliceState, TUseFetchErrorResponse } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TUseRequestOptions, TUseRequestReturn } from "./use-request.hook.type";
import type { TUseFetchCallback } from "./use-fetch.hook.type";
import type { RefObject } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";

import collectStateData from "./utils/collect-state-data.util";

import request from "@reducer/use-fetch/action/request.action";

import assert from "@util/assert/assert.util";

export default function useRequest<R = any>(deps: string | null, func: TUseFetchCallback<R>, options?: TUseRequestOptions): TUseRequestReturn<R> {
	assert(Error, "\"noCaching\" was not passed but the \"deps\" not!", Boolean(options?.noCaching && !deps));

	const store = useSelector<TStoreRootState, TUseFetchSliceState>(rootState => rootState.useFetch);
	const dispatch = useDispatch<TStoreDispatch>();
	const prevDeps: RefObject<string | null> = useRef(null);
	// Local state will be used only when `noCaching` is true.
	const [localState, setLocalState] = useState<TUseFetchCacheState<R>>({ error: null, isLoading: true, isPending: false });
	
	async function makeAPICallWithoutCaching() {
		try {
			// `isLoading` will be true only one time by first `useRequest` call.
			setLocalState(curr => ({ error: null, isPending: true, isLoading: curr.isLoading === true }));
	
			const response = await func();

			setLocalState({ error: response.error, data: response.data, isLoading: false, isPending: false });
		} catch(error) {
			setLocalState({ error: error as unknown as TUseFetchErrorResponse, isLoading: false, isPending: false });
		}	
	};
	
	useEffect(() => {
		if(!options?.noCaching) {
			dispatch(request({ newKeys: [deps!], prevKeys: [prevDeps.current!], func }));
		} else {
			makeAPICallWithoutCaching();
		}

		prevDeps.current = deps;
	}, [deps]);

	function manualRequestCall() {
		if(!options?.noCaching) {
			dispatch(request({ newKeys: [deps!], prevKeys: [prevDeps.current!], func }));
		} else {
			makeAPICallWithoutCaching();
		}

		prevDeps.current = deps;
	};

	return {
		...(options?.noCaching ? localState : collectStateData(deps!, prevDeps.current!, store.cache)),
		request: manualRequestCall
	};
};