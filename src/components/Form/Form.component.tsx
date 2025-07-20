import type { JSX } from "react";
import type { TFormProps } from "./Form.component.type";

import selectors from "./scss/Form.module.scss";

import FormSection from "./Form-Sector.component";
import FormHeader from "./Form-Header.component";

export function Form({ children, className, isChild, ...props }: TFormProps): JSX.Element {
	return(
		<form 
			className={`fc-n-n-l ${className || ""} ${selectors.form_container} ${!isChild ? selectors.form_container_parent : ""}`} 
			{...props}>
				{children}
		</form>
	);
};

export {
	FormHeader,
	FormSection
};