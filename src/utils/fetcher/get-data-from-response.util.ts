import { 
	G_FETCHER_REGEXP_JSON_CONTENT, 
	G_FETCHER_REGEXP_TEXT_CONTENT 
} from "./REGEXP.const";

import type { TFetcherReturn } from "./fetcher.util.type";

export default async function getDataFromResponse<R = unknown, E = unknown>(response: Response): Promise<TFetcherReturn<R, E>> {
	const contentType: string = response.headers.get("Content-Type")!;

	let data: any = undefined;
	let error: any = undefined;

	if(!response.ok) {
		if(G_FETCHER_REGEXP_TEXT_CONTENT.test(contentType)) {
			error = await response.text() as R;
		}
	
		if(G_FETCHER_REGEXP_JSON_CONTENT.test(contentType)) {
			error = await response.json() as R;
		}
	} else {
		if(G_FETCHER_REGEXP_TEXT_CONTENT.test(contentType)) {
			data = await response.text() as R;
		}
	
		if(G_FETCHER_REGEXP_JSON_CONTENT.test(contentType)) {
			data = await response.json() as R;
		}
	}

	return { response,	data, error };
};