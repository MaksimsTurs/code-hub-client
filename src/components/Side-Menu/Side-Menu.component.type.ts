import type { PropsWithChildren } from "react";
import type { JSX } from "react";

export type TSideMenuLinkProps = PropsWithChildren<{
	href: string
}> & JSX.IntrinsicElements["a"];