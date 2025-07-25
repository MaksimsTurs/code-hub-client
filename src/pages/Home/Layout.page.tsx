import type { LazyExoticComponent, JSX } from "react";

import Loader from "./Loader.page.tsx";
import Document from "@component/Document/Document.component";

import useAuth from "@hook/use-auth/use-auth.hook";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Home</title>
			<meta name="description" content="Eine moderne, leichte Alternative zu GitHub – verwalte Repositories, Issues und Projekte effizient und unabhängig. Für Entwickler, die Kontrolle, Übersicht und Performance schätzen."/>
			<meta name="keywords" content="Github, Repositories, Projekte, effizient, modern, alternative"/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { auth } = useAuth();

	auth("account/auth");

	return(
		<Document 
			loader={<Loader/>} 
			Metadata={Metadata}>
		  <Page/>
		</Document>
	);
};