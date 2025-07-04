import type { JSX } from "react";
import type { TInputCheckboxProps } from "./Input-Checkbox.type.component.ts";
import type { TExtendFieldValues } from "../Inputs.component.type.ts";

import selectors from "./Checkbox-Input.module.scss";

export default function CheckboxInput<T>({ label, register, validation, ...otherProps }: TInputCheckboxProps<TExtendFieldValues<T>>): JSX.Element {
	return(
		<label className={selectors.checkbox_container}>
			<p>{label}</p>
			<input {...otherProps } {...register(otherProps.name, {...validation }) } type="checkbox"/>
		</label>
	);
};