import type { JSX } from "react";
import type { TInputTextProps } from "./Input-Text.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import { IconCircleX } from "@/components/Icons/SVG-Icons.component";

import selectors from "./Input-Text.module.scss";

export default function TextInput<T>({ error, validation, register, ...otherProps }: TInputTextProps<TExtendFieldValues<T>>): JSX.Element {
	return(
		<label className={`${selectors.text_input_container} ${error ? selectors.text_input_container_with_error : ""}`}>
			<input {...register(otherProps.name, {...validation })} {...otherProps}/>
			{error && 
				<div className={`fr-c-n-xs ${selectors.text_input_error_container}`}>
					<IconCircleX/>
					<p>{error}</p>
				</div>}
		</label>
	);
};