import type { TAccount, TAPIRequestError, TFormatedError } from "@root/global.type";
import type { TUseRequestCallbackReturn } from "@hook/use-fetch/use-request.hook.type";
import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";

import fetcher from "@util/fetcher/fetcher.util";

export default async function getAccountById(id?: string): TUseRequestCallbackReturn<TAccount, TFormatedError> {
	try {
		const response: TFetcherReturn<TAccount, TAPIRequestError> = await fetcher.get<TAccount, TAPIRequestError>(`account/${id}`);

		if(response.error) {
			return { data: undefined, error: {...response.error, type: "SERVER" }};
		}

		return { data: response.data, error: null };
	} catch(error) {
		if(error instanceof Error) {
			return { data: undefined, error: { message: error.message, type: "CLIENT" }};
		};

		return { data: undefined, error: { message: "Unknown Error!", type: "CLIENT" }};
	}
};