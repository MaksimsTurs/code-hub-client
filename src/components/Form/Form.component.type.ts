import type { PropsWithChildren, JSX } from "react";

export type TFormProps = PropsWithChildren<JSX.IntrinsicElements["form"]>;

export type TFormSectionProps = PropsWithChildren<{
	title: string
} & Omit<JSX.IntrinsicElements["div"], "className">>;