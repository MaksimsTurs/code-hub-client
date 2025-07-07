import type { JSX } from "react";
import type { TInputTextProps } from "./Input-Text.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import { IconEye, IconEyeOff } from "@component/Icons/SVG-Icons.component";
import ErrorInputValidation from "@root/components/Errors/Error-Input-Validation/Error-Input-Validation.component";

import { useState, Fragment } from "react";

import selectors from "./Input-Text.module.scss";

export default function TextInput<T>({ error, validation, register, type, ...otherProps }: TInputTextProps<TExtendFieldValues<T>>): JSX.Element {
	const [isPasswordExposed, setPasswordExposed] = useState<boolean>(false);

	const exposePassword = (): void => {
		if(type === "password") {
			setPasswordExposed(prev => !prev)
		}
	};

	return(
		<label className={`${selectors.text_input_container} ${error ? selectors.text_input_container_with_error : ""}`}>
			<div className={selectors.text_input_body}>
				<input type={isPasswordExposed ? "text" : type} {...register(otherProps.name, {...validation })} {...otherProps}/>
				{type === "password" ?
				<Fragment>
					{isPasswordExposed ? 
					<IconEye className={selectors.text_input_password_exposer} width={20} height={20} onClick={exposePassword}/> : 
					<IconEyeOff className={selectors.text_input_password_exposer} width={20} height={20} onClick={exposePassword}/>}
				</Fragment> : null}
			</div>
			{error && <ErrorInputValidation message={error}/>}
		</label>
	);
};