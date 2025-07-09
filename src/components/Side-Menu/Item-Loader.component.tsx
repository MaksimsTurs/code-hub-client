import type { JSX } from "react";

import selectors from "./Item-Loader.module.scss";

export default function ItemLoader(): JSX.Element {
	return(<div className={selectors.item_loader}></div>);
};