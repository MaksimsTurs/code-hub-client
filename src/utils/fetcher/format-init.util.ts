import { THeaders, TFormatedInit } from "./fetcher.util.type";

export default function formatInit(body?: any, headers?: THeaders): TFormatedInit {
	headers = {...headers || {}};

	if((body && headers) && !(body instanceof FormData)) {
		headers["Content-Type"] = "application/json";
		body = JSON.stringify(body);
	}

	return { headers, body };
}