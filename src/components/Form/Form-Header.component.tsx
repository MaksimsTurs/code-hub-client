import type { JSX } from "react";
import type { TFormHeaderProps } from "./Form.component.type";

import selectors from "./scss/Form-Header.module.scss";

export default function FormHeader({ children, ...otherProps }: TFormHeaderProps): JSX.Element {
	return(<div className={`fr-c-n-xs ${selectors.form_header}`} {...otherProps }>{children}</div>);
};