import type { TFetcherReturn } from "@/utils/fetcher/fetcher.util.type";

export type TUseAuthReturn = {
	isPending: boolean
	authentication: TUseAuthAuthentication
	withAuth: TUseAuthWithAuth
} & TUseAuthLocalState;

export type TUseAuthHTTPMethods = "post" | "get";

export type TUseAuthWithAuth = <R>(method: TUseAuthHTTPMethods, url: string, body?: any) => Promise<TFetcherReturn<R | undefined, undefined>>;

export type TUseAuthAuthentication = (url: string, body: FormData) => void;

export type TUseAuthLocalState = {
	isPending: boolean
	error?: unknown
};

export type TUseAuthAuthorizeParam = {
	url: string
	accesToken?: string
};

export type TUseAuthAuthenticateParam = {
	url: string
	body: FormData
};