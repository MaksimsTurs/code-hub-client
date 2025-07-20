import type { JSX } from "react";
import type { LazyExoticComponent } from "react";

import Loader from "./Laoder.page.tsx";
import Layout from "@component/Layout/Layout.component";
import ProtectRoute from "@hook/use-auth/Protect-Route.component.tsx";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { lazy, Fragment } from "react";

const Page: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function Metadata(): JSX.Element {
	return(
		<Fragment>
			<title>Code Hub - Create Project</title>
			<meta name="description" content="Here you can create you new Project."/>
			<meta name="robots" content="index,follow"></meta>
		</Fragment>
	);
};

export default function PageLayout(): JSX.Element {
	const { account, auth } = useAuth();

	auth("account/auth");

	return(
		<ProtectRoute redirectUrl="/" or={[account]}>
			<Layout loader={<Loader/>} metadata={Metadata}>
		  	<Page/>
			</Layout>
		</ProtectRoute>
	);
};