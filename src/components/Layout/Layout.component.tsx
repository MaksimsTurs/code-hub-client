import useRequestAll from "@hook/use-fetch/use-request-all.hook";

import { Suspense } from "react";

import type { TLayoutProps } from "./Layout.component.type";

export default function Layout(props: TLayoutProps) {
	const { isLoading, data } = useRequestAll(props?.deps || [], props?.fetches || []);

	return(
		<Suspense fallback={props.loader}>
			{props.metadata?.(data)}
			{isLoading ? props.loader : props.children}
		</Suspense>
	);
};