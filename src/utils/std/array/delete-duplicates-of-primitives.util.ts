import type { TJSPrimitiveTypes } from "@/global.type";

export default function deleteDuplicatesOfPrimitives(array: TJSPrimitiveTypes[], keysToRemove: Set<TJSPrimitiveTypes>): TJSPrimitiveTypes[] {
	let cleanArray: TJSPrimitiveTypes[] = [];
	let index: number = 0;

	const length = array.length;

	if(!array.length) {
		return [];
	}
	
	while(index < length) {
		const primitive: TJSPrimitiveTypes = array[index];

		if(!keysToRemove.has(primitive)) {
			cleanArray.push(primitive);
		}
		
		index++
  }

  return cleanArray;
};