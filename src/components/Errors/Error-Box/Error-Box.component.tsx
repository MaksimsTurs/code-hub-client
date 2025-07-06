import type { JSX } from "react";
import type { TErrorBoxProps } from "./Error-Box.component.type";

import selectors from "./Error-Box.module.scss";

import { IconCircleX } from "@component/Icons/SVG-Icons.component";

export default function ErrorBox(props: TErrorBoxProps): JSX.Element {
	return(
		<div className={`fr-c-n-xs ${selectors.error_box_container}`}>
			<IconCircleX strokeWidth={1.5} width={22} height={22}/>
			{props.message}
		</div>
	);
};