import type { TUseMutateFunction } from "@hook/use-fetch/use-mutate.hook.type";
import type { TUseRequestCallback } from "@root/hooks/use-fetch/use-request.hook.type";

export type TUseFetchSliceState = {
	cache: TUseFetchCacheMap
};

//
// Cache state and items types.
//

export type TUseFetchCacheMap = Record<string, TUseFetchCacheItem<unknown, unknown>>;

export type TUseFetchCacheItem<D = unknown, E = unknown> = {
	state: TUseFetchCacheState<D, E>
	// ...something else...
};

export type TUseFetchCacheState<D = unknown, E = unknown> = {
	isLoading: boolean
	isPending: boolean
	error?: E | null
	data?: D | null
};

//
// Common return types.
//

export type TUseFetchActionsReturn<D = any> = {
	currKeys: string[]
	prevKeys: string[]
	data: D
};

//
// Request hook types.
//

export type TUseRequestActionParams = {
	currKeys: string[]
	prevKeys: string[]
	args: any[]
	callback: TUseRequestCallback<unknown, unknown>
};

//
// Mutate
//

export type TUseMutateActionParam = {
	currKeys: string[]
	prevKeys: string[]
	func: TUseMutateFunction<any, any, any>
	body: any
	currState: any
};