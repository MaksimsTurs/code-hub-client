import type { JSX } from "react";
import type { TAnchorTagContainerProps } from "./Anchor.component.type";

import selectors from "./Anchor-Tag-Container.module.scss";

export default function AnchorTagContainer(props: TAnchorTagContainerProps): JSX.Element {
	return <div className={`${selectors.anchor_tag_container} fc-n-n-xs`}>{props.children}</div>;
};