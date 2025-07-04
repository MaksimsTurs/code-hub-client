import { compress as lzcompress } from "lz-string";

export default function compress(str?: string | null): string | null | undefined {
	if(!str) {
		return str;
	}

	return lzcompress(str);
};