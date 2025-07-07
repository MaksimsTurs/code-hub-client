import type { JSX } from "react";
import type { TErrorInputValidationProps } from "./Error-Input-Validation.component.type";

import selectors from "./Error-Input-Validation.module.scss";

import { IconCircleX } from "@root/components/Icons/SVG-Icons.component";

export default function ErrorInputValidation(props: TErrorInputValidationProps): JSX.Element {
	return(
		<div className={`fr-c-n-xs ${selectors.input_error_message_container}`}>
			<IconCircleX/>
			<p>{props.message}</p>
		</div>
	);
};