import type { JSX } from "react";
import type { TAnchorTagProps } from "./Anchor.component.type";

import { useLocation, Link } from "react-router-dom";

import selectors from "./Anchor-Tag.module.scss";

export default function AnchorTag(props: TAnchorTagProps): JSX.Element {
	const { hash } = useLocation();
	const propsHash: string = `#${props.hash}`;

	return <Link className={`${selectors.anchor_tag} ${hash === propsHash ? selectors.anchor_tag_active : ""}`} to={propsHash}>{props.children}</Link>;
};