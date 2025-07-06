import type { JSX } from "react";

import selectors from "../scss/Description.module.scss";

import DescriptionCard from "./Description-Card.component";
import { IconBookCopy, IconBraces, IconLightBulb, IconRocket } from "@component/Icons/SVG-Icons.component";

export default function Description(): JSX.Element {
	return(
		<div className="fr-n-c-n">
			<div className={`fc-n-n-xs ${selectors.description_body}`}>
			  <div className="fr-n-n-xs">
				  <DescriptionCard 
				 	  title="Projects controll" 
					  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
					  icon={<IconBookCopy/>}/>
				  <DescriptionCard 
				  	title="Life code editor" 
					  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
					  icon={<IconBraces/>}/>
			  </div>
			  <div className="fr-n-n-xs">
			 	  <DescriptionCard 
				  	title="Easy to use CLI" 
				  	text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
				  	icon={<IconLightBulb/>}/>
				  <DescriptionCard 
				  	title="Future rich CLI" 
				 	  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum odit vero similique quae a voluptatem, numquam, facere, exercitationem nobis dolorem magni consectetur. Ab sequi itaque distinctio tenetur, sed hic!"
				    icon={<IconRocket/>}/>
			  </div>
		  </div>
    </div>
	);
};