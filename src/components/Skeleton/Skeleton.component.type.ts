import type { PropsWithChildren } from "react";

export type TSkeletonContainerProps = PropsWithChildren<{
	layout: TSkeletonLayout
}>;

export type TSkeletonBodyProps = PropsWithChildren<{
	width: string
	padding: string
	layout: TSkeletonLayout
}>;

export type TSkeletonSectionProps = PropsWithChildren<{
	layout: TSkeletonLayout
	className?: string
}>;

export type TSkeletonCircleProps = {
	width: string
	height: string
};

export type TSkeletonBoxProps = {
	width: string
	height: string
};

export type TSkeletonLayout =
	"fr-n-n-xs"  |
	"fr-c-c-n"   | 
	"fr-c-c-m"   |
	"fr-c-n-xs"  |
	"fr-n-sp-xs" |
	"fr-c-n-m"   |

	"fc-n-n-n"   |
	"fc-c-c-n"   |
	"fc-n-n-xs"  | 
	"fc-c-c-xs"  | 
	"fc-c-c-m"   | 
	"fc-n-n-m"