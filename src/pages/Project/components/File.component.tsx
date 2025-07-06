import type { JSX } from "react";
import type { TFileExplorerFileProps } from "../Page.type.page";
import type { TFileExplorerFile } from "@hook/use-code-hub/use-code-hub.hook.type";

import selectors from "../scss/File.module.scss";

import useCodeHub from "@hook/use-code-hub/use-code-hub.hook";

export default function File(props: TFileExplorerFileProps): JSX.Element {
	const { selectFile } = useCodeHub();

	return(
		<div className={`fr-c-n-xs ${selectors.file_container}`} onClick={() => selectFile(props.item as TFileExplorerFile)}>
			<svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
			<p>{props.item.name}</p>
		</div>
	);
};