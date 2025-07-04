import type { LazyExoticComponent, JSX } from "react";
import type { TCodeHubProject } from "@/reducers/use-code-hub/use-code-hub.slice.type.ts";
import type { TUseRequestAllCallbackReturn } from "@/hooks/use-fetch/use-request-all.hook.type";

import Layout from "@/components/Layout/Layout.component";
import Metadata from "@/components/Metadata/Metadata.component";

import useAuth from "@/hooks/use-auth/use-auth.hook";

import { lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata() {
	return <Metadata title="Home" meta={[]}/>;
};

export default function PageLayout(): JSX.Element {
	const { withAuth } = useAuth();

	const getAllProjects = async (): TUseRequestAllCallbackReturn<TCodeHubProject[]> => {
		return (await withAuth("get", "project/all") || []) as unknown as TUseRequestAllCallbackReturn<TCodeHubProject[]>;
	}

	return(
		<Layout loader={<p>Loading</p>} metadata={metadata} deps={["project/all"]} fetches={[getAllProjects]}>
		  <Page/>
		</Layout>
	);
};