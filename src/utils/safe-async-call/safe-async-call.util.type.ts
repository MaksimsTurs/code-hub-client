export type TSafeAsyncReturnData<R> = [R | null, Error | null];

export type TSafeAsyncCallCallback<R = any> = (...args: any[]) => Promise<R>;

export type TSafeAsyncReturn<R = any> = Promise<TSafeAsyncReturnData<R>>;