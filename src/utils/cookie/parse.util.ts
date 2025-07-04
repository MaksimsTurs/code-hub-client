import type { TCookieObject } from "./cookie.util.type";

import {
	G_COOKIE_REGEXP_ITEMS_SPLITTER,
	G_COOKIE_REGEXP_ITEM_SPLITTER
} from "./REGEXP.const.ts";

export default function parse(): TCookieObject {
	const cookies: TCookieObject = {};
	const cookieStrings: string[] = document.cookie.split(G_COOKIE_REGEXP_ITEMS_SPLITTER);
	const length: number = cookieStrings.length;

	let index: number = 0;
	
	while(index < length) {
		const formatedString: string = cookieStrings[index].trim();
		const { 0: key, 1: value } = formatedString.split(G_COOKIE_REGEXP_ITEM_SPLITTER);

		cookies[key] = value;

		index++;
	}
	
	return cookies;
};