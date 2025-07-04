export default function getFileExtention(str?: string | null): string | null | undefined{
	if(!str) {
		return str;
	}

	return str.substring(str.lastIndexOf('.', str.length - 1) + 1, str.length);
};