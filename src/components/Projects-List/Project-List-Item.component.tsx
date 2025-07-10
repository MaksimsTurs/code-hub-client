import type { JSX } from "react";
import type { TProjectProps } from "./Projects-List.component.type";

import { Link } from "react-router-dom";

import selectors from "./Project-List-Item.module.scss";

import std from "@util/std/std.util";

export default function ProjectListItem(props: TProjectProps): JSX.Element {
	return(
		<li className={selectors.project_item} key={props.project._id}>
			<Link data-index={props.index} to={`/project/${props.project._id}`}>
				<div className="fr-c-sp-xs">
					<h3>{props.project.name}</h3>
					<p className={selectors.project_item_privacity}>{std.string.firstLetterToUpperCase(props.project.visibility)}</p>
				</div>
				<p className={selectors.project_item_description}>{props.project.description || "<No Description>"}</p>
			</Link>
		</li>
	);
};