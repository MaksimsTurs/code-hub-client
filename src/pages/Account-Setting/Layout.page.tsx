import type { LazyExoticComponent, JSX } from "react";

import Document from "@component/Document/Document.component";

import useAuth from "@hook/use-auth/use-auth.hook";

import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Change account data</title>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { auth } = useAuth();
	
	auth("account/auth");

	return(
		<Document 
			loader={<p>...</p>} 
			Metadata={Metadata}>
		  <Page/>
		</Document>
	);
};