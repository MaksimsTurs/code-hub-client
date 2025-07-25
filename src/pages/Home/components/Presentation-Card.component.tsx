import type { JSX } from "react";
import type { TPresentationCardProps } from "../Page.type.page";

import selectors from "../scss/Presentation-Card.module.scss";

export default function PresentationCard(props: TPresentationCardProps): JSX.Element {
	return(
		<section className={`fc-n-n-xs ${selectors.presentation_card_container}`}>
			<div className="fr-c-n-xs">
				{props.icon}
				<h2 className={selectors.presentation_card_title}>{props.title}</h2>
			</div>
			<p className={selectors.presentation_card_text}>{props.text}</p>
		</section>
	);
};