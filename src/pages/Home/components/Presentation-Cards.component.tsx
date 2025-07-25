import type { JSX } from "react";

import selectors from "../scss/Presentation-Cards.module.scss";

import PresentationCard from "./Presentation-Card.component";
import { IconBookCopy, IconBraces, IconLightBulb, IconRocket } from "@component/Icons/SVG-Icons.component";

export default function PresentationCards(): JSX.Element {
	return(
		<div className="fr-c-c-n">
			<div className={`fc-n-n-xs ${selectors.presentation_cards_container}`}>
				<PresentationCard 
				 	title="Projects controll" 
					text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
					icon={<IconBookCopy/>}/>
				<PresentationCard 
				  title="Life code editor" 
					text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
					icon={<IconBraces/>}/>
			 	<PresentationCard 
				  title="Easy to use CLI" 
				  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
				  icon={<IconLightBulb/>}/>
				<PresentationCard 
				  title="Future rich CLI" 
				 	text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
				  icon={<IconRocket/>}/>
		  </div>
    </div>
	);
};