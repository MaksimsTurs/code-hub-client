import type { JSX } from "react";
import type { TFileExplorerItem } from "@hook/use-code-hub/use-code-hub.hook.type";

import selectors from "../scss/File-Explorer.module.scss";

import MapFileExplorerItems from "./Map-File-Explorer-Items.component";

import useFetch from "@hook/use-fetch/use-fetch.hook";

export default function FileExplorer(): JSX.Element {
	const { getNamedState } = useFetch();

	return(
		<aside className={selectors.file_explorer_container}>
			<MapFileExplorerItems items={getNamedState<TFileExplorerItem[]>("projects/cndsdnc")?.data || []}/>
		</aside>
	);
};