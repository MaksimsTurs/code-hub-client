import type { TPossibleErrors } from "./assert.util.type";

export default function assert(ErrorConstrucor: TPossibleErrors, message: string, condition: boolean): void {
	if(condition) {
		throw new ErrorConstrucor(message);
	}
};