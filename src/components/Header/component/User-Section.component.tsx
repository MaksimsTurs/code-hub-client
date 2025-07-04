import type { JSX } from "react";
import type { TUserSectionProps } from "../Header.component.type";

import { Link } from "react-router-dom";

import selectors from "../scss/User-Section.module.scss";

export default function UserSection(props: TUserSectionProps): JSX.Element {
	return(
		<Link to={`/user/${props.account._id}`} className={`fr-c-n-m ${selectors.user_section_container}`}>
			<img src={props.account.avatar} alt={props.account._id}/>
		</Link>
	);
};