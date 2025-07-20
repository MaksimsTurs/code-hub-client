import type { PropsWithChildren } from "react";

export type TAnchorTagLayoutProps = PropsWithChildren;

export type TAnchorTagSideMenuProps = PropsWithChildren;

export type TAnchorTagProps = PropsWithChildren<{
	hash: string
}>;

export type TAnchorTagContainerProps = PropsWithChildren;

export type TAnchorTagBodyProps = PropsWithChildren<{
	hash: string
	title: string
}>;