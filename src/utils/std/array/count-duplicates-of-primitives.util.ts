import type { TJSPrimitiveTypes } from "@/global.type";

export default function countDuplicatesOfPrimitives(array: TJSPrimitiveTypes[], keysToCount: Set<TJSPrimitiveTypes>): Record<string, number> {
	const count: Record<string, number> = {};
	const length: number = array.length;

	let index: number = 0;

	while(index < length) {
		const primitive: TJSPrimitiveTypes = array[index];

		if(keysToCount.has(primitive)) {
			count[primitive as keyof typeof count] ? 
				count[primitive as keyof typeof count]++ : 
				count[primitive as keyof typeof count] = 1;
		}

		index++;
	}

	return count;
};