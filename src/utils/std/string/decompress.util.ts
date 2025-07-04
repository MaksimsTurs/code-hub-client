import { decompress as lzdecompress } from "lz-string";

export default function decompress(str?: string | null): string | null | undefined {
	if(!str) {
		return str;
	}

	return lzdecompress(str);
}