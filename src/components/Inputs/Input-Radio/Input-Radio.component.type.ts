import type { TInputsCommonProps } from "../Inputs.component.type";
import type { PropsWithChildren } from "react";

export type TInputRadioProps<T> = {
	label: string
	description?: string
	error?: string
} & TInputsCommonProps<T, "type">;

export type TInputRadioContainerProps = PropsWithChildren<{
	error?: string
}>;