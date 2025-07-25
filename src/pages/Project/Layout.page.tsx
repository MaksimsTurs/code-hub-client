import type { JSX, LazyExoticComponent } from "react";

import Document from "@component/Document/Document.component";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Project</title>
			<meta name="description" content="Here you can see a xy Project."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	return(
		<Document 
			loader={<p>Loading</p>} 
			Metadata={Metadata}>
		  <Page/>
		</Document>
	);
};