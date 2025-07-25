import type { TStoreDispatch, TStoreRootState } from "@reducer/reducer.store";
import type { TUseFetchCacheState, TUseFetchSliceState } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TUseRequestOptions, TUseRequestReturn, TUseRequestFetchOptions } from "./use-request.hook.type";
import type { RefObject } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";

import collectStateData from "./utils/collect-state-data.util";

import request from "@reducer/use-fetch/action/request.action";

export default function useRequest<R = unknown, E = unknown>(fetchOptions: TUseRequestFetchOptions<R, E>, options?: TUseRequestOptions): TUseRequestReturn<R, E> {
	const store = useSelector<TStoreRootState, TUseFetchSliceState>(rootState => rootState.useFetch);
	const dispatch = useDispatch<TStoreDispatch>();
	const prevDeps: RefObject<string | null> = useRef(fetchOptions.key);
	// Local state will be used only when `noCaching` is true.
	const [localState, setLocalState] = useState<TUseFetchCacheState<R, E>>({ error: null, isLoading: true, isPending: false });
	
	async function makeAPICallWithoutCaching() {
		// `isLoading` will be true only one time by first `useRequest` call.
		setLocalState(curr => ({...curr, error: null, isPending: true }));
		setLocalState({...(await fetchOptions.callback(...fetchOptions.args)), isLoading: false, isPending: false });
	};
	
	useEffect(() => {
		if(options?.noCaching) {
			makeAPICallWithoutCaching();
		} else {
			dispatch(request({ 
				currKeys: [fetchOptions.key!], 
				prevKeys: [prevDeps.current!], 
				callback: fetchOptions.callback, 
				args: fetchOptions.args 
			}));
		}

		prevDeps.current = fetchOptions.key;
	}, [fetchOptions.key]);

	function manualRequestCall() {
		if(!options?.noCaching) {
			dispatch(request({ 
				currKeys: [fetchOptions.key!], 
				prevKeys: [prevDeps.current!], 
				callback: fetchOptions.callback, 
				args: fetchOptions.args 
			}));
		} else {
			makeAPICallWithoutCaching();
		}

		prevDeps.current = fetchOptions.key;
	};

	return {
		...(options?.noCaching ? localState : collectStateData<R, E>(fetchOptions.key!, prevDeps.current!, store.cache)),
		request: manualRequestCall
	};
};