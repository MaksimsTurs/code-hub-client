import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.page.tsx";

import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Sign Up</title>
			<meta name="description" content="Create a new Code Hub Account to open full functionality!"/>
			<meta name="keywords" content="Code Hub, registration, sign up"/>
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