import type { TInputsCommonProps } from "../Inputs.component.type";

export type TInputFileProps<T> = {
	label: string
} & TInputsCommonProps<T, "type">;

export type TUploadedFile = {
	name: string
	extention: string
	type: string
	size: number
	src: string
};