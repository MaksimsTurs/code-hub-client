import type { THeaders, TFetcherOptions, TFetcherReturn } from "@util/fetcher/fetcher.util.type";

import fetcher from "@util/fetcher/fetcher.util";

export type TUseWithAuthReturn<A = any, E = any> = {
	isLoading: boolean
	isPending: boolean
	account?: A
	error?: E
	withAuth: <F = any, R = any>(options: TUseWithAuthOptions<R, E>) => Promise<TFetcherReturn<F, E>>
};

export type TUseWithAuthOptions<R = any, E = any> = {
	fetch: TUseWithAuthFetchOption
	refresh: TUseWithAuthRefreshOption<R>
	formatError?: TUseWithAuthFormatError<E>
	state?: boolean
};

export type TUseWithAuthFormatError<E = any> = (error: unknown) => E;

export type TUseWithAuthFetchOption = {
	method: keyof TFetcherMethods
	url: string
	body?: any
	headers?: THeaders
	options?: TFetcherOptions
};

export type TUseWithAuthRefreshOption<R> = {
	url: string
	extract: TRefreshExtract<R>
	body?: any
	headers?: THeaders
	options?: TFetcherOptions
};

export type TRefreshExtract<R> = (response: TFetcherReturn<R, unknown>) => string;

export type TFetcherMethods = Omit<typeof fetcher, "base">;