import type { JSX } from "react";
import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type";
import type { TAccount } from "@root/global.type";

import { useNavigate, useParams } from "react-router-dom";

import Project from "./components/Project.component";
import Button from "@component/Button/Button.component";
import { IconPlus } from "@component/Icons/SVG-Icons.component";

import selectors from "./Page.module.scss";

import useFetch from "@hook/use-fetch/use-fetch.hook";
import useAuth from "@hook/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const params = useParams<{ userId: string }>();
	const navigate = useNavigate();
	const { getNamedState } = useFetch();
	const { account } = useAuth<TAccount>();
	
	const projects = getNamedState<TCodeHubProject[]>("project/all");

	const goToCreateProject = (): void => {
		navigate("/project/create");
	};

	return(
		<div className="fc-n-n-xs">
			{(account && account._id === params.userId) &&
			<div className="fr-n-fe-n">
				<Button onClick={goToCreateProject}>
					<IconPlus width={24} height={24}/>
				</Button>
			</div>}
			<ul className={`fc-n-n-m ${selectors.projects_list}`}>
				{projects?.data && projects.data.map(item => <Project key={item._id} project={item}/>)}
			</ul>
			<Button>Show more</Button>
		</div>
	);
};