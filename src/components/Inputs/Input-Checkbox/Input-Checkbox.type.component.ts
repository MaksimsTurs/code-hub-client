import type { TInputsCommonProps } from "../Inputs.component.type";

export type TInputCheckboxProps<T> = {
	label: string
} & TInputsCommonProps<T, "type">;