import type { TStoreRootState, TStoreDispatch } from "@/reducers/reducer.store";
import type { TUseAuthSliceState } from "@/reducers/use-auth/use-auth.slice.type";
import type { TUseAuthReturn, TUseAuthHTTPMethods, TUseAuthLocalState } from "./use-auth.hook.type";
import type { TFetcherReturn } from "@/utils/fetcher/fetcher.util.type";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { saveAccessToken } from "@/reducers/use-auth/use-auth.slice";

import safeAsyncCall from "@/utils/safe-async-call/safe-async-call.util";
import fetcher from "@/utils/fetcher/fetcher.util";

// TODO: Fix @ts-ignore hell.
export default function useAuth(): TUseAuthReturn {
	const dispatch = useDispatch<TStoreDispatch>();
	const { accessToken } = useSelector<TStoreRootState, TUseAuthSliceState>(state => state.useAuth);
	const [localState, setLocalState] = useState<TUseAuthLocalState>({ isPending: false });

	return {
		...localState,
		withAuth: async function<R>(method: TUseAuthHTTPMethods, url: string,  body: any) {
			setLocalState({ isPending: true });

			const [response, error] = await safeAsyncCall(async function() {
				// @ts-ignore
				let firstAccessTry: TFetcherReturn<R> = null;

				if(method === "get") {
					firstAccessTry = await fetcher.get<R>(url, { Authentication: `Bearer ${accessToken}` });
				} else if(method === "post") {
					firstAccessTry = await fetcher.post<R>(url, body, { Authentication: `Bearer ${accessToken}` });
				}

				// Access token is not valid or user are not registrated.
				// Try to refresh access token.
				if(firstAccessTry.response.status === 403) {
					// TODO: Maybe implement function that save a url to the route there create user the new access token.
					let newAccessToken = await fetcher.get<{ accessToken: string }>("user/refresh-access-token", undefined, { credentials: "include" });
	
					if(newAccessToken.error) {
						throw newAccessToken.error;
					}
						
					// @ts-ignore
					let lastAccessTry: TFetcherReturn<R> = null;

					// @ts-ignore
					if(method === "get") {
						lastAccessTry = await fetcher.get<R>(url, { Authentication: `Bearer ${newAccessToken.data?.accessToken}` });
					} else if(method === "post") {
						lastAccessTry = await fetcher.post<R>(url, body, { Authentication: `Bearer ${newAccessToken.data?.accessToken}` });
					}
	
					if(lastAccessTry.error) {
						throw newAccessToken.error;
					}
	
					dispatch(saveAccessToken(newAccessToken.data!.accessToken));

					return lastAccessTry;
				}

				// Handle all other error statuses.
				if(firstAccessTry.error) {
					throw firstAccessTry.error;
				}

				return firstAccessTry;
			});
			
			if(error) {
				setLocalState({ isPending: false, error });
				return undefined;
			} else {
				setLocalState({ isPending: false });
				return response;
			}
		},
		authentication: function(_url, _body) {}
	};
};