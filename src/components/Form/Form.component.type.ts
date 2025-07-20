import type { PropsWithChildren, JSX } from "react";

export type TFormProps = PropsWithChildren<{
	isChild?: boolean
} & JSX.IntrinsicElements["form"]>;

export type TFormSectionProps = PropsWithChildren<{
	title: string
} & Omit<JSX.IntrinsicElements["div"], "className">>;

export type TFormHeaderProps = PropsWithChildren<Omit<JSX.IntrinsicElements["div"], "className">>;