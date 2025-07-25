import type { JSX } from "react";

import Presentation from "./components/Presentation.component";

export default function Page(): JSX.Element {
	return(
		<main className="fc-n-n-xs">
			<Presentation/>
		</main>
	);
};