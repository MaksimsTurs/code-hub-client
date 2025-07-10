import type { JSX } from "react";
import type { TAccount } from "@root/global.type";

import PersonalInformation from "./components/Account-Information.component";
import ProjectsList from "@root/components/Projects-List/Projects-List.component";

import useFetch from "@root/hooks/use-fetch/use-fetch.hook";

import { useParams } from "react-router-dom";

export default function Page(): JSX.Element {
	const params = useParams<{ userId: string }>();
	const { getNamedState } = useFetch();

	const accountData = getNamedState<TAccount>(`user/${params.userId}`);

	return(
		<div className="fr-n-n-xs">
			<PersonalInformation/>
			<ProjectsList showDataBoxOnHover projects={accountData?.data?.projects || []}/>
		</div>
	);
};