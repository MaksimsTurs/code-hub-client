import type { TSerializeErrorCallback } from "./serialize-error.util.type";

export default function serializeError<F = unknown, E = unknown>(error: unknown, fallback: F, callback?: TSerializeErrorCallback<E>): E | F {
	if(error instanceof Error && callback) {
		return callback(error);
	}

	return fallback;
}