import type { TJSPrimitiveTypes } from "@/global.type";

export type TArray = {
	countDuplicatesOfPrimitives: (array: TJSPrimitiveTypes[], keysToCount: Set<TJSPrimitiveTypes>) => Record<string, number>
	deleteDuplicatesOfPrimitives: (array: TJSPrimitiveTypes[], keysToRemove: Set<TJSPrimitiveTypes>) => TJSPrimitiveTypes[]
};