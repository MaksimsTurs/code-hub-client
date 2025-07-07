import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Home</title>
			<meta name="description" content="Main page of Code Hub."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { authorization } = useAuth();

	authorization("user/authorization");

	return(
		<Layout loader={<p>Loading</p>} metadata={Metadata}>
		  <Page/>
		</Layout>
	);
};