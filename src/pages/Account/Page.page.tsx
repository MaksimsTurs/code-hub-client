import type { JSX } from "react";
import type { TAccountPageParams } from "./Page.page.type";
import type { TAccount } from "@root/global.type";

import AccountInformation from "./components/Account-Information.component";
import ProjectsList from "@component/Projects-List/Projects-List.component";

import useFetch from "@hook/use-fetch/use-fetch.hook";

import { useParams } from "react-router-dom";

export default function Page(): JSX.Element {
	const params = useParams<TAccountPageParams>();
	const { getNamedState } = useFetch();

	const accountData = getNamedState<TAccount>(`user/${params.accountId}`);

	return(
		<div className="fr-n-n-xs">
			<AccountInformation account={accountData?.data!}/>
			<ProjectsList showDataBoxOnHover projects={accountData?.data?.projects || []}/>
		</div>
	);
};