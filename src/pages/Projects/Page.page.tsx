import type { JSX } from "react";
import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type";

import Project from "./components/Project.component";
import Button from "@component/Button/Button.component";

import selectors from "./Page.module.scss";

import useFetch from "@hook/use-fetch/use-fetch.hook";

export default function Page(): JSX.Element {
	const { getNamedState } = useFetch();
	
	const projects = getNamedState<TCodeHubProject[]>("project/all");

	return(
		<div className="fc-n-n-xs">
			<ul className={`fc-n-n-m ${selectors.projects_list}`}>
				{projects?.data && projects.data.map(item => <Project key={item._id} project={item}/>)}
			</ul>
			<Button>Show more</Button>
		</div>
	);
};