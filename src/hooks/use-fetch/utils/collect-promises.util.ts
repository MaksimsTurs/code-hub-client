import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";
import type { TUseFetchCacheMap } from "@reducer/use-fetch/use-fetch.slice.type";
import type { TUseFetchCallback } from "../use-fetch.hook.type";

export default function collectPromises(fetches: TUseFetchCallback[], currDeps: string[], cache: TUseFetchCacheMap): Promise<TFetcherReturn<unknown, unknown>>[] {
	const promises: Promise<TFetcherReturn<unknown, unknown>>[] = []

	const length: number = fetches.length;

	let index: number = 0;

	while(index < length) {
		if(!(currDeps[index] in cache)) {
			promises.push(fetches[index]());
		}

		index++;
	}

	return promises;
};