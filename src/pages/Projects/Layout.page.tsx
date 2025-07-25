import type { LazyExoticComponent, JSX } from "react";
import type { TProject, TFormatedError } from "@root/global.type.ts";

import ErrorPage from "@component/Errors/Error-Page/Error-Page.component.tsx";
import Document from "@component/Document/Document.component";
import Loader from "./Loader.page.tsx";

import { useRequest } from "@hook/use-fetch/use-fetch.hook";
import useAuth from "@hook/use-auth/use-auth.hook";

import getAllProjects from "./requests/get-all-projects.requests";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Projects</title>
			<meta name="description" content="Here you can see a Projects from xy."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { auth } = useAuth();
	const { isLoading, error } = useRequest<TProject[], TFormatedError>({
		args: [],
		callback: getAllProjects,
		key: "project/all"
	})

	auth("account/auth");

	return(
		<Document
			isLoading={isLoading}
			loader={<Loader/>} 
			Metadata={Metadata}>
		  {error ? <ErrorPage message={error.message} code={error.code}/> : <Page/>}
		</Document>
	);
};