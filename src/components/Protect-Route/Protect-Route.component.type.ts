import type { PropsWithChildren } from "react";

export type TProtectRouteProps = PropsWithChildren<{
	or?: TProtectCondition[]
	and?: TProtectCondition[]
	redirectUrl: string
}>;

export type TProtectCondition = boolean | Promise<boolean>;