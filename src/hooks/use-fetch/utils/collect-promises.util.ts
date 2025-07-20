import type { TFetcherReturn } from "@util/fetcher/fetcher.util.type";
import type { TUseFetchCallback } from "../use-fetch.hook.type";

export default function collectPromises(fetches: TUseFetchCallback[]): Promise<TFetcherReturn<unknown, unknown>>[] {
	const promises: Promise<TFetcherReturn<unknown, unknown>>[] = []

	const length: number = fetches.length;

	let index: number = 0;

	while(index < length) {
		promises.push(fetches[index]());

		index++;
	}

	return promises;
};