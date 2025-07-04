import type { JSX } from "react";
import type { TFormProps } from "./Form.component.type";

import selectors from "./scss/Form.module.scss";

export default function Form({ children, className, ...props }: TFormProps): JSX.Element {
	return(<form className={`fc-n-n-l ${className || ""} ${selectors.form_container}`} {...props}>{children}</form>);
};