import type { JSX } from "react";
import type { TCodeHubProject } from "@/reducers/use-code-hub/use-code-hub.slice.type";

import { useNavigate } from "react-router-dom";

import Project from "./components/Project.component";
import Button from "@/components/Button/Button.component";
import { IconPlus } from "@/components/Icons/SVG-Icons.component";

import selectors from "./Page.module.scss";

import useFetch from "@/hooks/use-fetch/use-fetch.hook";

export default function Page(): JSX.Element {
	const navigate = useNavigate();
	const { getNamedState } = useFetch();
	const projects = getNamedState<TCodeHubProject[]>("project/all");

	const goToCreateProject = (): void => {
		navigate("/project/create");
	};

	return(
		<div className="fc-n-n-xs">
			<div className="fr-n-fe-n">
				<Button onClick={goToCreateProject}>
					<IconPlus/>
				</Button>
			</div>
			<ul className={`fc-n-n-m ${selectors.projects_list}`}>
				{projects?.data && projects.data.map(item => <Project key={item._id} project={item}/>)}
			</ul>
			<Button>Show more</Button>
		</div>
	);
};