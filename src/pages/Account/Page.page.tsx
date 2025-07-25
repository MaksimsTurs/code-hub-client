import type { JSX } from "react";
import type { TAccountPageParams } from "./Page.page.type";
import type { TAccount } from "@root/global.type";

import AccountInformation from "./components/Account-Information.component";
import ProjectsList from "@component/Projects-List/Projects-List.component";
import Button from "@component/Button/Button.component";

import useFetch from "@hook/use-fetch/use-fetch.hook";

import selectors from "./Page.module.scss";

import { useParams, useNavigate } from "react-router-dom";

export default function Page(): JSX.Element {
	const params = useParams<TAccountPageParams>();
	const navigate = useNavigate();
	const { getNamedState } = useFetch();

	const accountData = getNamedState<TAccount, unknown>(`account/${params.accountId}`);

	const showAllAccountProjects = (): void => {
		navigate("/account/projects");
	};
	
	return(
		<main className="fr-n-n-xs">
			<AccountInformation account={accountData?.data!}/>
			<div className={`fc-n-n-xs ${selectors.account_projects_container}`}>
				<ProjectsList showDataBoxOnHover projects={accountData?.data?.projects || []}/>
				{accountData?.data?.projects.length === 5 ? <Button onClick={showAllAccountProjects}>Show more</Button> : null}
			</div>
		</main>
	);
};