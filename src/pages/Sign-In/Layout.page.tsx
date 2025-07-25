import type { LazyExoticComponent, JSX } from "react";

import Document from "@component/Document/Document.component.tsx";
import Loader from "./Loader.page";

import { Fragment, lazy } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Sign In</title>
			<meta name="description" content="Log in you'r Code Hub Account to open full functionality!"/>
			<meta name="keywords" content="Code Hub, log in, sign in"/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	return(
		<Document 
			loader={<Loader/>} 
			Metadata={Metadata}>
		  <Page/>
		</Document>
	);
};