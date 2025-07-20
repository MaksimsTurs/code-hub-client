import type { JSX } from "react";
import type { TDescriptionCardProps } from "../Page.type.page";

import selectors from "../scss/Description-Card.module.scss";

export default function DescriptionCard(props: TDescriptionCardProps): JSX.Element {
	return(
		<section className={`fc-n-n-xs ${selectors.description_card_container}`}>
			<div className="fr-c-n-xs">
				{props.icon}
				<h2>{props.title}</h2>
			</div>
			<p className={selectors.description_card_text}>{props.text}</p>
		</section>
	);
};