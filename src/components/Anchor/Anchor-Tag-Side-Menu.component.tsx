import type { JSX } from "react";
import type { TAnchorTagSideMenuProps } from "./Anchor.component.type";

import selectors from "./Anchor-Tag-Side-Menu.module.scss";

export default function AnchorTagSideMenu(props: TAnchorTagSideMenuProps): JSX.Element {
	return <aside className={`fc-n-n-xs ${selectors.anchor_tag_side_menu}`}>{props.children}</aside>
};