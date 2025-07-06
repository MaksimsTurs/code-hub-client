import type { TUseAuthFetcherMethods } from "@hook/use-auth/use-auth.hook.type";

export type TUseAuthSliceState = {
	accessToken?: string
	account?: unknown
};

export type TUseAuthAuthActionsReturn = { 
	accessToken?: string
	account: unknown 
};

export type TUseAuthAuthenticationParam = {
	url: string
	body: any
};

export type TUseAuthWithAuthParam = {
	method: TUseAuthFetcherMethods
	url: string
	body: any
	accessToken?: string
};

export type TUseAuthWithAuthReturn<T> = {
	data?: T
	accessToken?: string
};