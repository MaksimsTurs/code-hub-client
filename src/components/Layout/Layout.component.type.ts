import type { PropsWithChildren, JSX } from "react";
import type { TUseFetchCallback } from "@hook/use-fetch/use-fetch.hook.type";
import type { TUseFetchCacheState } from "@root/reducers/use-fetch/use-fetch.slice.type";

export type TLayoutProps = PropsWithChildren<{
	deps?: string[]
	fetches?: TUseFetchCallback[]
	loader: JSX.Element
	metadata?: TLayoutMetadataFunc
}>;

export type TLayoutMetadataFunc = (data: Map<string, TUseFetchCacheState>) => JSX.Element;