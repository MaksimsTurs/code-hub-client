import type { JSX } from "react";
import type { TFileExplorer } from "../Page.type.page";

import { Fragment } from "react";

import File from "./File.component";
import Folder from "./Folder.component";

export default function MapFileExplorerItems(props: TFileExplorer): JSX.Element {
	return(
		<Fragment>
			{props.items.map(item => 
				<div key={item.id} style={{ paddingLeft: "1rem" }}>
					{item.type === "file" ? <File key={item.id} item={item}/> : <Folder key={item.id} item={item}/>}
				</div>)}
		</Fragment>
	);
};