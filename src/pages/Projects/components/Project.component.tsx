import type { JSX } from "react";
import type { TProjectProps } from "../Page.type.page";

import { Link } from "react-router-dom";

import selectors from "../scss/Project.module.scss";

import std from "@util/std/std.util";

export default function Project(props: TProjectProps): JSX.Element {
	return(
		<li className={selectors.project_container}>
			<Link style={{ width: "100%" }} className="fc-n-n-xs" to={`/project/${props.project._id}`}>
				<div className="fr-n-sp-xs">
					<h3>{props.project.name}</h3>
					<p className={selectors.project_visibility_type}>{std.string.firstLetterToUpperCase(props.project.visibility)}</p>
				</div>
				<div>
					<p className={selectors.project_description}>{props.project.description || "[NO DESCRIPTION]"}</p>
				</div>
			</Link>
		</li>
	);
};