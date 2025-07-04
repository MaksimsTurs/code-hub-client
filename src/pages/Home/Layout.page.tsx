import type { LazyExoticComponent, JSX } from "react";

import Layout from "@/components/Layout/Layout.component";
import Metadata from "@/components/Metadata/Metadata.component";

import { lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata(): JSX.Element {
	return <Metadata title="Home" meta={[]}/>;
};

export default function PageLayout(): JSX.Element {
	return(
		<Layout loader={<p>Loading</p>} metadata={metadata}>
		  <Page/>
		</Layout>
	);
};