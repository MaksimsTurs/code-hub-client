import parse from "./parse.util";

export default function get(key: string): string {
	return parse()[key];
};