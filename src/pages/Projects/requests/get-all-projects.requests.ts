import type { TProject } from "@root/global.type";
import type { TAPIRequestError, TFormatedError } from "@root/global.type";
import type { TUseRequestCallbackReturn } from "@hook/use-fetch/use-request.hook.type";
import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";

import fetcher from "@util/fetcher/fetcher.util";

export default async function getAllProjects(): TUseRequestCallbackReturn<TProject[], TFormatedError> {
	try {
		const response: TFetcherReturn<TProject[], TAPIRequestError> = await fetcher.get<TProject[], TAPIRequestError>("project/all", undefined, { credentials: "include" });

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