import type { JSX } from "react";

import Presentation from "./components/Presentation.component";
import Description from "./components/Description.component";

export default function Page(): JSX.Element {
	return(
		<div className="fc-n-n-xs">
			<Presentation/>
			<Description/>
		</div>
	);
};