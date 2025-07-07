import type { THeaders } from "@util/fetcher/fetcher.util.type";
import type { PropsWithChildren } from "react";

import fetcher from "@util/fetcher/fetcher.util";

export type TUseAuthReturn<A, E = unknown> = {
	isPending: boolean
	error?: E
	account?: A
	authentication: TUseAuthAuthentication
	authorization: TUseAuthAuthorization
	withAuth: TUseAuthWithAuth
};

export type TUseAuthLocalState<E> = {
	error?: E
};

export type TUseAuthAuthorization = (url: string) => void;

export type TUseAuthAuthentication = (url: string, body: any) => Promise<boolean>;

export type TUseAuthFetcherMethods = Omit<keyof typeof fetcher, "base">;

export type TUseAuthWithAuth = <R>(method: TUseAuthFetcherMethods, url: string, body?: any, headers?: THeaders) => Promise<R>;

export type TProtectRouteProps = PropsWithChildren<{
	or?: TProtectCondition[]
	and?: TProtectCondition[]
	redirectUrl: string
}>;

export type TProtectCondition = boolean | Promise<boolean>;