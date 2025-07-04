import type { LazyExoticComponent } from "react";

import Layout from "@/components/Layout/Layout.component";
import Metadata from "@/components/Metadata/Metadata.component";

import { lazy } from "react";

const CreateProjectPage: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata() {
	return <Metadata title="Home" meta={[]}/>;
};

export default function CreateProjectPageLayout() {
	return(
		<Layout loader={<p>Loading</p>} metadata={metadata}>
		  <CreateProjectPage/>
		</Layout>
	);
};