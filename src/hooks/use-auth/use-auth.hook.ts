import type { TStoreRootState, TStoreDispatch } from "@reducer/reducer.store";
import type { TUseAuthSliceState, TUseAuthSignInBody } from "@reducer/use-auth/use-auth.slice.type";
import type { 
	TUseAuthReturn, 
	TUseAuthLocalState, 
	TUseAuthIsActionSuccess, 
	TUseAuthOptions
} from "./use-auth.hook.type";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import auth from "@reducer/use-auth/actions/auth.action";
import signOut from "@reducer/use-auth/actions/sign-out.action";
import signIn from "@reducer/use-auth/actions/sign-in.action";

import { resetError, deleteData } from "@reducer/use-auth/use-auth.slice";

import useWithAuth from "./use-with-auth.hook";

export default function useAuth<A = any, E = Error>(options?: TUseAuthOptions<E>): TUseAuthReturn<A, E> {
	const dispatch = useDispatch<TStoreDispatch>();
	const [localState, setLocalState] = useState<TUseAuthLocalState<E>>();
	const { accessToken, ...reduxState } = useSelector<TStoreRootState, TUseAuthSliceState>(state => state.useAuth);

	useEffect(() => {
		return () => {
			dispatch(resetError());
		}
	}, []);

	return {
		isPending: reduxState.isPending,
		isLoading: reduxState.isLoading,
		isAuth: reduxState.isAuth,
		error: localState?.error as E,
		account: reduxState.account as A,
		auth: function(url: string): void {
			useEffect(() => {
				async function __auth__() {
					try {
						setLocalState({});

						await dispatch(auth(url)).unwrap();
					} catch(error) {
						setLocalState({ error: options?.formatError?.(error) || error as E });
					}
				};

				if(!reduxState.account) {
					__auth__();
				}
			}, []);
		},
		signIn: async function(url: string, body: TUseAuthSignInBody): TUseAuthIsActionSuccess {
			try {
				setLocalState({});

				await dispatch(signIn({ url, body })).unwrap();

				return true;
			} catch(error) {
				setLocalState({ error: options?.formatError?.(error) || error as E });
				
				return false;
			}	
		},
		signOut: async function(url: string): TUseAuthIsActionSuccess {
			try {
				await dispatch(signOut(url)).unwrap();

				return true;
			} catch(error) {
				setLocalState({ error: options?.formatError?.(error) || error as E });

				return false;
			}
		},
		deleteAccountData: function() {
			dispatch(deleteData());
		}
	};
};

export { useWithAuth };