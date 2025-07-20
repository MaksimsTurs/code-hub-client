import type { JSX } from "react";
import type { TAnchorTagLayoutProps } from "./Anchor.component.type";

export default function AnchorTagLayout(props: TAnchorTagLayoutProps): JSX.Element {
	return(
		<div className="fr-n-n-xs">{props.children}</div>
	);
};