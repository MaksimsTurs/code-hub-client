import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.component.tsx";

import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Sign Up</title>
			<meta name="description" content="Here you can create a new account."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	return(
		<Layout loader={<Loader/>} metadata={Metadata}>
		  <Page/>
		</Layout>
	);
};