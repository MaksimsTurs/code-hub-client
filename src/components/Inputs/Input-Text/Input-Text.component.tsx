import type { JSX } from "react";
import type { TInputTextProps } from "./Input-Text.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import { IconEye, IconEyeOff } from "@component/Icons/SVG-Icons.component";
import ErrorInputValidation from "@root/components/Errors/Error-Input-Validation/Error-Input-Validation.component";

import { useState } from "react";

import selectors from "./Input-Text.module.scss";

export default function InputText<T>({ error, validation, label, register, type, ...otherProps }: TInputTextProps<TExtendFieldValues<T>>): JSX.Element {
	const [isPasswordExposed, setPasswordExposed] = useState<boolean>(false);

	const exposePassword = (): void => {
		if(type === "password") {
			setPasswordExposed(prev => !prev)
		}
	};

	return(
		<div className={`${selectors.text_input_container} ${error ? selectors.text_input_container_with_error : ""}`}>
			<label htmlFor={otherProps.name}>{label}</label>
			<div className={selectors.text_input_body}>
				<input id={otherProps.name} type={isPasswordExposed ? "text" : type} {...register(otherProps.name, {...validation })} {...otherProps}/>
				{type === "password" ?
				<button type="button" aria-label="Expose password" tabIndex={-1} onClick={exposePassword} className={selectors.text_input_password_exposer}>
					{isPasswordExposed ? 
					<IconEye width={20} height={20}/> : 
					<IconEyeOff  width={20} height={20}/>}
				</button> : null}
			</div>
			{error && <ErrorInputValidation message={error}/>}
		</div>
	);
};