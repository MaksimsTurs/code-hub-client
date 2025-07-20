import type { TUseWithAuthOptions, TUseWithAuthReturn } from "./use-with-auth.hook.type";
import type { TStoreRootState, TStoreDispatch } from "@root/reducers/reducer.store";
import type { TUseAuthSliceState } from "@root/reducers/use-auth/use-auth.slice.type";
import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";

import safeAsyncCall from "@util/safe-async-call/safe-async-call.util";
import fetcher from "@util/fetcher/fetcher.util";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { resetError, setAccessToken, setAuthState as __setAuthState__ } from "@reducer/use-auth/use-auth.slice";

export default function useWithAuth<A = any, E = any>(): TUseWithAuthReturn<A, E> {
	const { accessToken, isLoading, isPending, error, account } = useSelector<TStoreRootState, TUseAuthSliceState>(state => state.useAuth);
	const dispatch = useDispatch<TStoreDispatch>();

	useEffect(() => {
		return () => {
			dispatch(resetError());
		}
	}, []);

	return {
		isLoading,
		isPending,
		error: error as E,
		account: account as A,
		withAuth: async function<F = any, R = any>(options: TUseWithAuthOptions<R, E>) {
			setAuthState({ isPending: true }, dispatch, options);

			//
			// First API access try.
			//
			const [firstAccessResponse, errorByFirstAccess] = await safeAsyncCall<TFetcherReturn<F, E>>(async function() {
				options.fetch.options = {...options.fetch.options, credentials: "include" };
				options.fetch.headers = {...options.fetch.headers, Authentication: `Bearer ${accessToken}` };
				
				const args = options.fetch.method === "get" ? 
					[options.fetch.url, options.fetch.headers, options.fetch.options] : 
					[options.fetch.url, options.fetch.body, options.fetch.headers, options.fetch.options];
		
				// @ts-ignore
				return await fetcher[options.fetch.method]<F, E>(...args);
			});

			if(errorByFirstAccess) {
				setAuthState({ accessToken, account, isPending: false, error: options.formatError?.(errorByFirstAccess) }, dispatch, options);
				throw new Error(errorByFirstAccess.message);
			}
		
			//
			// Access token is invalid, try to refresh him.
			//
			if(firstAccessResponse && firstAccessResponse.response.status === 403) {
				// Try create new access token.
				const [newAccessTokenResponse, errorByCreatingNewAccessToken] = await safeAsyncCall<TFetcherReturn<R, E>>(async function() {
					options.refresh.options = {...options.refresh.options, credentials: "include" };
					options.refresh.headers = { Authentication: `Bearer ${accessToken}` };
		
					return await fetcher.get<R, E>(options.refresh.url, options.refresh.headers, options.refresh.options);
				});
		
				if(errorByCreatingNewAccessToken) {
					setAuthState({ accessToken, account, isPending: false, error: options.formatError?.(errorByCreatingNewAccessToken) }, dispatch, options);
					throw new Error(errorByCreatingNewAccessToken.message);
				}

				if(newAccessTokenResponse?.response.status === 401) {
					setAuthState({ 
						accessToken: null, 
						account: null, 
						isPending: false, 
						error: options.formatError?.(newAccessTokenResponse.error) as E 
					}, dispatch, options);			
					return firstAccessResponse;
				}
				
				dispatch(setAccessToken(options.refresh.extract(newAccessTokenResponse!)));
		
				//
				// Make last try to access API.
				//
				const [lastAccessTry, errorByLastAccess] = await safeAsyncCall<TFetcherReturn<F, E>>(async function() {
					options.fetch.options = {...options.fetch.options, credentials: "include" };
					options.fetch.headers = { Authentication: `Bearer ${accessToken}` };
					
					const args = options.fetch.method === "get" ? 
						[options.fetch.url, options.fetch.headers, options.fetch.options] : 
						[options.fetch.url, options.fetch.body, options.fetch.headers, options.fetch.options];
		
					// @ts-ignore
					return await fetcher[options.fetch.method]<F, E>(...args);
				});
		
				if(errorByLastAccess) {
					setAuthState({ accessToken, account, isPending: false, error: options.formatError?.(errorByLastAccess) as E }, dispatch, options);
					throw new Error(errorByLastAccess.message);
				}

				setAuthState({ isLoading, isPending: false }, dispatch, options);
				return lastAccessTry!;
			}

			//
			// Handle all other errors.
			//
			if(firstAccessResponse?.error) {
				setAuthState({ accessToken, account, isPending: false, error: options.formatError?.(firstAccessResponse.error) }, dispatch, options);
				return firstAccessResponse;
			}

			setAuthState({ isLoading, isPending: false }, dispatch, options);

			return firstAccessResponse!;
		}
	}
};

function setAuthState(state: Partial<TUseAuthSliceState>, dispatch: any, options: TUseWithAuthOptions) {
	if(options.state) {
		dispatch(__setAuthState__(state));
	}
}