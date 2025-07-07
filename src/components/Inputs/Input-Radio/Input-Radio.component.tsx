import type { JSX } from "react";
import type { TInputRadioProps, TInputRadioContainerProps } from "./Input-Radio.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import ErrorInputValidation from "@root/components/Errors/Error-Input-Validation/Error-Input-Validation.component";

import selectors from "./Input-Radio.module.scss";

export default function InputRadio<T>({ label, description, register, validation, error, ...otherProps }: TInputRadioProps<TExtendFieldValues<T>>): JSX.Element {
	const className: string = 
		`
			fc-n-n-xs
			${error ? selectors.radio_input_container_with_error : ""}
			${selectors.radio_input_container}
			${description ? selectors.radio_input_container_bordered : ""}
			${description ? selectors.radio_input_container_background_animation : ""}
		`;

	return(
		<label className={className}>
			<div className="fr-c-n-xs">
				<input {...otherProps} {...register(otherProps.name, {...validation })} type="radio"/>
				<span className={selectors.radio_input_checkmark}></span>
				<p>{label}</p>
			</div>
			{description && <p className={selectors.radio_input_description}>{description}</p>}
		</label>
	);
};

export function InputRadioContainer(props: TInputRadioContainerProps): JSX.Element {
	return(
		<div>
			<div className="fc-n-n-xs">{props.children}</div>
			{props.error && <ErrorInputValidation message={props.error}/>}
		</div>
	);
};