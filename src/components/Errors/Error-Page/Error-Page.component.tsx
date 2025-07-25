import type { JSX } from "react";
import type { TErrorPageProps } from "./Error-Page.component.type";

import selectors from "./Error-Page.module.scss";

import { Link } from "react-router-dom";

export default function ErrorPage(props: TErrorPageProps): JSX.Element {
	return(
		<div className={`fc-c-c-n ${selectors.error_page_container}`}>
			<div className={selectors.error_page_body}>
				{props.code ? <p className={selectors.error_page_message}>{props.code}</p> : null}
				<p className={selectors.error_page_message}>{props.message}</p>
				<div className={`fr-n-n-xs ${selectors.error_page_message_support_suggestions}`}>
					<Link to="/">Home</Link>
					<p>or</p>
					<Link to="#">wirte to the Support.</Link>
				</div>
			</div>
		</div>
	);
};