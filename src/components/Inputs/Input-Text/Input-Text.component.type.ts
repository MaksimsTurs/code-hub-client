import type { TInputsCommonProps } from "../Inputs.component.type";

export type TInputTextProps<T> = {
	type: TTypesInputText
	placeholder: string
	error?: string
	label: string
} & TInputsCommonProps<T>;

export type TTypesInputText = "email" | "password" | "text" | "number";