// @ts-nocheck

import type { JSX } from "react";
import type { TProjectDataBoxProps } from "./Projects-List.component.type";

import selectors from "./Project-Data-Box.module.scss";

export default function ProjectDataBox(props: TProjectDataBoxProps): JSX.Element {
	return(
		<div 
			style={{ right: `${props.position.x}px`, top: `${props.position.y}px` }} 
			className={`fc-n-n-xs ${selectors.project_info_box}`}>
			<div className="fr-c-sp-xs">
				<p>Created at:</p>
				<p>{props.project.createdAt}</p>
			</div>
			<div className="fr-c-sp-xs">
				<p>Updated at:</p>
				<p>{props.project.updatedAt}</p>
			</div>
			<div className="fr-c-sp-xs">
				<p>Owners:</p>
				<p>{props.project.owners.length}</p>
			</div>
			<div className="fr-c-sp-xs">
				<p>Contributors:</p>
				<p>{props.project.contributors.length}</p>
			</div>
			<div className="fr-c-sp-xs">
				<p>Stars:</p>
				<p>{props.project.stars.length}</p>
			</div>
		</div>
	);
};