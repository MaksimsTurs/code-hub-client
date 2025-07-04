import type { JSX } from "react";
import type { TInputRadioProps } from "./Input-Radio.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import selectors from "./Input-Radio.module.scss";

export default function InputRadio<T>({ label, description, register, validation, ...otherProps }: TInputRadioProps<TExtendFieldValues<T>>): JSX.Element {
	const className: string = 
		`
			fc-n-n-xs
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