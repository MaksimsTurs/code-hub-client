export default function areAllDepsNotEqual(currDeps: string[], prevDeps: string[]): boolean {
	const length: number = currDeps.length;

	let countOfNonEqualKeys: number = 0;
	let index: number = 0;

	while(index < length) {
		if(currDeps[index] !== prevDeps[index]) {
			countOfNonEqualKeys++;
		}

		index++;
	}

	return countOfNonEqualKeys === currDeps.length;
};