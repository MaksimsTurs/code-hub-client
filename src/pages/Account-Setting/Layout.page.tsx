import type { LazyExoticComponent, JSX } from "react";
import type { TUseRequestAllCallbackReturn } from "@root/hooks/use-fetch/use-request-all.hook.type.ts";
import type { TAccount } from "@root/global.type.ts";
import type { TUseFetchCacheState } from "@root/reducers/use-fetch/use-fetch.slice.type";
import type { TAccountSettingPageParams } from "./Page.page.type.ts";

import Layout from "@component/Layout/Layout.component";

import fetcher from "@util/fetcher/fetcher.util.ts";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { useParams } from "react-router-dom";
import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(data: Map<string, TUseFetchCacheState>): JSX.Element {
	const params = useParams<TAccountSettingPageParams>();
	const accountName: string | undefined = data.get(`user/${params.accountId}`)?.data?.name;

	return(
		<Fragment>
			<title>{accountName || "Code Hub"}</title>
			<meta name="description" content={`Account of ${accountName}.`}/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const params = useParams<TAccountSettingPageParams>();
	
	useAuth().auth("account/auth");

	const getAccountById = (): TUseRequestAllCallbackReturn<TAccount> => {
		return fetcher.get<TAccount>(`account/${params.accountId}`);
	};

	return(
		<Layout 
			loader={<p>...</p>} 
			metadata={Metadata} 
			deps={[`user/${params.accountId}`]}
			fetches={[getAccountById]}>
		  <Page/>
		</Layout>
	);
};