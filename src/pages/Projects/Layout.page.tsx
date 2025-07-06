import type { LazyExoticComponent, JSX } from "react";
import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type.ts";
import type { TUseRequestAllCallbackReturn } from "@hook/use-fetch/use-request-all.hook.type";

import Layout from "@component/Layout/Layout.component";
import Metadata from "@component/Metadata/Metadata.component";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import fetcher from "@util/fetcher/fetcher.util.ts";

import { lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata() {
	return <Metadata title="Home" meta={[]}/>;
};

export default function PageLayout(): JSX.Element {
	const { authorization } = useAuth();

	authorization("user/authorization");
		
	const getAllProjects = async (): TUseRequestAllCallbackReturn<TCodeHubProject[]> => {
		return await fetcher.get<TCodeHubProject[]>("project/all", undefined, { credentials: "include" });
	};

	return(
		<Layout loader={<p>Loading</p>} metadata={metadata} deps={["project/all"]} fetches={[getAllProjects]}>
		  <Page/>
		</Layout>
	);
};