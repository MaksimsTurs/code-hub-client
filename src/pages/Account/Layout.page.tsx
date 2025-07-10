import type { LazyExoticComponent, JSX } from "react";
import type { TUseRequestAllCallbackReturn } from "@root/hooks/use-fetch/use-request-all.hook.type.ts";
import type { TAccount } from "@root/global.type.ts";
import type { TUseFetchCacheState } from "@root/reducers/use-fetch/use-fetch.slice.type";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.page.tsx";

import fetcher from "@util/fetcher/fetcher.util.ts";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { useParams } from "react-router-dom";
import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(data: Map<string, TUseFetchCacheState>): JSX.Element {
	const params = useParams<{ userId: string }>();
	const accountName: string | undefined = data.get(`user/${params.userId}`)?.data?.name;

	return(
		<Fragment>
			<title>{accountName || "Code Hub"}</title>
			<meta name="description" content={`Account of ${accountName}.`}/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const params = useParams<{ userId: string }>();
	const { authorization } = useAuth();

	authorization("user/authorization");

	const getAccountById = (): TUseRequestAllCallbackReturn<TAccount> => {
		return fetcher.get<TAccount>(`user/${params.userId}`);
	};

	return(
		<Layout 
			loader={<Loader/>} 
			metadata={Metadata} 
			deps={[`user/${params.userId}`]}
			fetches={[getAccountById]}>
		  <Page/>
		</Layout>
	);
};