import type { JSX } from "react";
import type { TProject } from "@root/global.type";

import Button from "@component/Button/Button.component";
import ProjectsList from "@root/components/Projects-List/Projects-List.component";

import useFetch from "@hook/use-fetch/use-fetch.hook";

export default function Page(): JSX.Element {
	const { getNamedState } = useFetch();
	
	const projects = getNamedState<TProject[]>("project/all");

	return(
		<div className="fc-n-n-xs">
			<ProjectsList projects={projects?.data || []}/>
			<Button>Show more</Button>
		</div>
	);
};