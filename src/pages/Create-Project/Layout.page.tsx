import type { JSX } from "react";
import type { LazyExoticComponent } from "react";

import Layout from "@component/Layout/Layout.component";
import Metadata from "@component/Metadata/Metadata.component";
import ProtectRoute from "@component/Protect-Route/Protect-Route.component.tsx";

import useAuth from "@hook/use-auth/use-auth.hook.ts";

import { lazy } from "react";

const CreateProject: LazyExoticComponent<any> = lazy(() => import("./Page.page.tsx"));

function metadata(): JSX.Element {
	return <Metadata title="Home" meta={[]}/>;
};

export default function CreateProjectLayout(): JSX.Element {
	const { account } = useAuth();

	return(
		<Layout loader={<p>Loading</p>} metadata={metadata}>
			<ProtectRoute redirectUrl="/" and={[account]}>
		  	<CreateProject/>
			</ProtectRoute>
		</Layout>
	);
};