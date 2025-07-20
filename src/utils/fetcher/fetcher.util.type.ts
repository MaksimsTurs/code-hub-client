export type TFetcherServerError = {
	code: number
	message: string
};

export type TFetcher = {
  base?: string
  get: <R = unknown, E = TFetcherServerError>(url: string, headers?: THeaders, options?: TFetcherOptions) => Promise<TFetcherReturn<R, E>>
  post: <R = unknown, E = TFetcherServerError>(url: string, body?: any, headers?: THeaders, options?: TFetcherOptions) => Promise<TFetcherReturn<R, E>>
  delete: <R = unknown, E = TFetcherServerError>(url: string, body?: any, headers?: THeaders, options?: TFetcherOptions) => Promise<TFetcherReturn<R, E>>
};

export type TFetcherReturn<D, E> = {
	data?: D
	error?: E
	response: Response
};


export type TFormatedInit = {
	body: any | null
	headers: THeaders | null
};

export enum EHeaderKeys {
	"Content-Length"   = "Content-Length",
	"Content-Type"     = "Content-Type",
	"Content-Language" = "Content-Language",
	"Authentication"   = "Authentication",
	"Authorization"    = "Authorization"
};

export type THeaders = Partial<Record<EHeaderKeys, string | undefined | null>>;

export type TFetcherOptions = Omit<RequestInit, "method" | "body" | "headers">;