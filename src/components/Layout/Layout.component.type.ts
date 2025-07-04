import type { PropsWithChildren, JSX } from "react";
import type { TUseFetchCallback } from "@/hooks/use-fetch/use-fetch.hook.type";

export type TLayoutProps = PropsWithChildren<{
	deps?: string[]
	fetches?: TUseFetchCallback[]
	loader: JSX.Element
	metadata?: TLayoutMetadataFunc
}>;

export type TLayoutMetadataFunc = <T>(data: T) => JSX.Element;