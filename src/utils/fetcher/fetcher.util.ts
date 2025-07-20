import type { TFetcher, THeaders, TFormatedInit, TFetcherOptions, TFetcherReturn, TFetcherServerError } from "./fetcher.util.type";

import formatUrl from "./format-url.util";
import formatInit from "./format-init.util";
import getDataFromResponse from "./get-data-from-response.util";

const fetcher: TFetcher = {
  base: undefined,
  get: async function<R, E = TFetcherServerError>(url: string, headers?: THeaders, options?: TFetcherOptions): Promise<TFetcherReturn<R, E>> {
		try {
			const initData: TFormatedInit = formatInit(undefined, headers);
			const response: Response = await fetch(formatUrl(this.base, url), {
				...options,
				body: initData.body,
				headers: initData.headers as HeadersInit
			});
	
			return getDataFromResponse<R, E>(response);
		} catch(error) {
			throw error;
		}
	},
  post: async function<R, E = TFetcherServerError>(url: string, body?: any, headers?: THeaders, options?: TFetcherOptions): Promise<TFetcherReturn<R, E>> {
		try {
			const initData: TFormatedInit = formatInit(body, headers);
			const response: Response = await fetch(formatUrl(this.base, url), {
				...options,
				method: "POST",
				body: initData.body,
				headers: initData.headers as HeadersInit
			});
	
			return getDataFromResponse<R, E>(response);
		} catch(error) {
			throw error;
		}
	},
  delete: async function<R, E = TFetcherServerError>(url: string, body?: any, headers?: THeaders, options?: TFetcherOptions): Promise<TFetcherReturn<R, E>> {
		try {
			const initData: TFormatedInit = formatInit(body, headers);
			const response: Response = await fetch(formatUrl(this.base, url), {
				...options,
				method: "DELETE",
				body: initData.body,
				headers: initData.headers as HeadersInit
			});
	
			return getDataFromResponse<R, E>(response);
		} catch(error) {
			throw error;
		}
	}
};

export default fetcher;