import type { TInputsCommonProps } from "../Inputs.component.type";

export type TInputRadioProps<T> = {
	label: string
	description?: string
} & TInputsCommonProps<T, "type">;