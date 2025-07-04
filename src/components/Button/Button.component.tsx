import type { JSX } from "react";
import type { TButtonProps } from "./Button.component.type";

import selectors from "./Button.module.scss"

export default function Button({ children, className, ...props }: TButtonProps): JSX.Element {
	return(<button {...props} className={`fr-c-c-n ${selectors.button} ${className}`}>{children}</button>);
};