import type { JSX } from "react";
import type { TDocumentProps } from "./Document.component.type";

import { Suspense } from "react";

export default function Document(props: TDocumentProps): JSX.Element {
	return(
		<Suspense fallback={props.loader}>
			{props.Metadata()}
			{props.isLoading ? props.loader : props.children}
		</Suspense>
	);
};