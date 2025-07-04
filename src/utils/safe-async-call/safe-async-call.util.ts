import type { TSafeAsyncCallCallback, TSafeAsyncReturn } from "./safe-async-call.util.type";

export default async function safeAsyncCall<R>(callback: TSafeAsyncCallCallback<R>, ...args: any[]): TSafeAsyncReturn<R> {
	try {
		return [await callback(...args), null];
	} catch(error) {
		return [null, error as Error];
	}
}