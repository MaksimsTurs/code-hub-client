import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.page";

import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Sign In</title>
			<meta name="description" content="Here you can log in in your account."/>
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