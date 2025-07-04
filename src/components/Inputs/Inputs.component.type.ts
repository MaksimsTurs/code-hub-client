import type { JSX } from "react";
import type { Path, UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";

export type TExtendFieldValues<T> = T extends FieldValues ? T : never;

export type TInputsCommonProps<T, A extends keyof JSX.IntrinsicElements["input"] = never> = {
	name: Path<T>
	register: UseFormRegister<TExtendFieldValues<T>>
	validation?: TInputsValidation
} & Omit<JSX.IntrinsicElements["input"], "className" | A>;

export type TInputsValidation = {
	min?: ValidationRule<string | number>
	minLength?: ValidationRule<number>
	max?: ValidationRule<string | number>
	maxLength?: ValidationRule<number>
	required?: string | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
}