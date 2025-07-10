import type { JSX } from "react";
import type { TEmptyProps } from "./Empty.component.type";

import selectors from "./Empty.module.scss";

import { IconPackageOpen } from "../Icons/SVG-Icons.component";

export default function Empty(props: TEmptyProps): JSX.Element {
	return(
		<div className={`fr-c-n-xs ${selectors.empty_container}`}>
			<IconPackageOpen strokeWidth={1} width={36} height={36}/>
			{props.label}
		</div>
	);
};