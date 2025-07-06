import type { JSX } from "react";
import type { TUserSectionProps } from "../Header.component.type";

import { Link } from "react-router-dom";

import { IconUserCircle } from "@component/Icons/SVG-Icons.component";

import selectors from "../scss/User-Section.module.scss";

export default function UserSection(props: TUserSectionProps): JSX.Element {
	return(
		<Link to={`/user/${props.account._id}`} className={`fr-c-n-m ${selectors.user_section_container}`}>
			{!props.account.avatar ? <IconUserCircle width="34" height="34"/> : <img src={props.account.avatar} alt={props.account._id}/>}
			{props.account.name}
		</Link>
	);
};