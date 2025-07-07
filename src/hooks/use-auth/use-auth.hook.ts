import type { TStoreRootState, TStoreDispatch } from "@reducer/reducer.store";
import type { TUseAuthSliceState } from "@reducer/use-auth/use-auth.slice.type";
import type { TUseAuthReturn, TUseAuthFetcherMethods, TUseAuthLocalState } from "./use-auth.hook.type";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import withAuth from "@reducer/use-auth/actions/with-auth.action";
import authorization from "@reducer/use-auth/actions/authorization.action";
import authentication from "@reducer/use-auth/actions/authentication.action";

export default function useAuth<A = any, E = Error>(): TUseAuthReturn<A, E> {
	const dispatch = useDispatch<TStoreDispatch>();
	const [localState, setLocalState] = useState<TUseAuthLocalState<E>>();
	const { accessToken, ...reduxState } = useSelector<TStoreRootState, TUseAuthSliceState>(state => state.useAuth);

	return {
		isPending: reduxState.isPending,
		error: localState?.error as E | undefined,
		account: reduxState.account as A,
		withAuth: async function<R>(method: TUseAuthFetcherMethods, url: string, body?: any): Promise<R> {
			try {
				const data: R = (await dispatch(withAuth({ method, url, body, accessToken })).unwrap()).data as R;
				return data;
			} catch(error) {
				setLocalState({ error: error as E })
				throw error;
			}
		},
		authorization: function(url: string): void {
			useEffect(() => {
				try {
					dispatch(authorization(url)).unwrap();
				} catch(error) {
					setLocalState({ error: error as E });
				}
			}, []);
		},
		authentication: async function(url: string, body: any): Promise<boolean> {
			try {
				await dispatch(authentication({ url, body })).unwrap();

				return true;
			} catch(error) {
				setLocalState({ error: error as E });

				return false;
			}
		}
	};
};