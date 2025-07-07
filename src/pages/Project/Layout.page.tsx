import type { JSX, LazyExoticComponent } from "react";

import Layout from "@component/Layout/Layout.component";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Project</title>
			<meta name="description" content="Here you can see a xy Project."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	return(
		<Layout loader={<p>Loading</p>} metadata={Metadata}>
		  <Page/>
		</Layout>
	);
};