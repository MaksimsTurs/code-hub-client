import type { JSX } from "react";
import type { TAnchorTagBodyProps } from "./Anchor.component.type";

import selectors from "./Anchor-Tag-Body.module.scss";

export default function AnchorTagBody(props: TAnchorTagBodyProps): JSX.Element {
	return(
		<div className={`fc-n-n-xs ${selectors.anchor_tag_body}`}>
			<p className={selectors.anchor_tag_title} id={props.hash}>{props.title}</p>
			<div>{props.children}</div>
		</div>
	);
};