import type { LazyExoticComponent, JSX } from "react";
import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type.ts";
import type { TUseRequestAllCallbackReturn } from "@hook/use-fetch/use-request-all.hook.type";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.page.tsx";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import fetcher from "@util/fetcher/fetcher.util.ts";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Projects</title>
			<meta name="description" content="Here you can see a Projects from xy."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { authorization } = useAuth();

	authorization("user/authorization");
		
	const getAllProjects = async (): TUseRequestAllCallbackReturn<TCodeHubProject[]> => {
		return await fetcher.get<TCodeHubProject[]>("project/all", undefined, { credentials: "include" });
	};

	return(
		<Layout loader={<Loader/>} metadata={Metadata} deps={["project/all"]} fetches={[getAllProjects]}>
		  <Page/>
		</Layout>
	);
};