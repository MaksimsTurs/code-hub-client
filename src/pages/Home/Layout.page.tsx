import type { LazyExoticComponent, JSX } from "react";

import Layout from "@component/Layout/Layout.component";
import Loader from "./Loader.page.tsx";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

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
	useAuth().auth("account/auth");

	return(
		<Layout loader={<Loader/>} metadata={Metadata}>
		  <Page/>
		</Layout>
	);
};