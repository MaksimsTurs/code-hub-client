import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Metadata from "@component/Metadata/Metadata.component";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata(): JSX.Element {
	return <Metadata title="Home" meta={[]}/>;
};

export default function PageLayout(): JSX.Element {
	const { authorization } = useAuth();

	authorization("user/authorization");

	return(
		<Layout loader={<p>Loading</p>} metadata={metadata}>
		  <Page/>
		</Layout>
	);
};