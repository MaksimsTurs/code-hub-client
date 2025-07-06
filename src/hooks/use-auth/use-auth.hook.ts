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
	const [localState, setLocalState] = useState<TUseAuthLocalState<E>>({ isPending: false });
	const { accessToken, ...reduxState } = useSelector<TStoreRootState, TUseAuthSliceState>(state => state.useAuth);

	return {
		isPending: localState.isPending,
		error: localState.error as E,
		account: reduxState.account as A,
		withAuth: async function<R>(method: TUseAuthFetcherMethods, url: string, body?: any): Promise<R> {
			try {
				setLocalState({ isPending: true });
				const data: R = (await dispatch(withAuth({ method, url, body, accessToken })).unwrap()).data as R;
				setLocalState({ isPending: false });

				return data;
			} catch(error) {
				setLocalState({ isPending: false, error: error as E });

				throw error;
			}
		},
		authorization: function(url: string): void {
			useEffect(() => {
				async function auth() {
					setLocalState({ isPending: true });
					await dispatch(authorization(url));
					setLocalState({ isPending: false });
				}

				auth();
			}, []);
		},
		authentication: async function(url: string, body: any): Promise<boolean> {
			try {
				setLocalState({ isPending: true });
				await dispatch(authentication({ url, body })).unwrap();
				setLocalState({ isPending: false });

				return true;
			} catch(error) {
				setLocalState({ isPending: false, error: error as E });

				return false;
			}
		}
	};
};