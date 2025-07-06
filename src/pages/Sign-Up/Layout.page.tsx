import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Metadata from "@component/Metadata/Metadata.component";

import { lazy } from "react";

const SignUpPage: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata() {
	return <Metadata title="Home" meta={[]}/>;
};

export default function SignUpPageLayout(): JSX.Element {
	return(
		<Layout loader={<p>Loading</p>} metadata={metadata}>
		  <SignUpPage/>
		</Layout>
	);
};