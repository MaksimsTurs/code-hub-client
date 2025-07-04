import type { JSX } from "react";
import type { TFileExplorerFolder } from "../Page.type.page";

import { useState } from "react";

import selectors from "../scss/Folder.module.scss";

import MapFileExplorerItems from "./Map-File-Explorer-Items.component";

export default function Folder(props: TFileExplorerFolder): JSX.Element {
	const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false);
	
	const openFolder = (): void => {
		setIsFolderOpen(prev => !prev);
	};

	return(
		<div key={props.item.id} className={selectors.folder_container}>
			<div onClick={openFolder} className={`fr-c-n-xs ${selectors.folder_name_container}`}>
				{isFolderOpen ?
					<svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m6 14 2-3a2 2 0 0 1 1-1h11a2 2 0 0 1 2 3l-2 6a2 2 0 0 1-2 1H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 1v1a2 2 0 0 0 2 1h6a2 2 0 0 1 2 2v2"/></svg> :
					<svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8a2 2 0 0 1-2-1V4a2 2 0 0 0-2-1H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>}
				<p>{props.item.name}</p>
			</div>
			{isFolderOpen && <MapFileExplorerItems items={props.item.items || []}/>}
		</div>
	);
};