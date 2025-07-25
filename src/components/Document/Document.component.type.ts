import type { JSX, PropsWithChildren } from "react";

export type TDocumentProps = PropsWithChildren<{
	loader: JSX.Element
	isLoading?: boolean
	Metadata: TDocumentMetadataComponent
}>;

export type TDocumentMetadataComponent = () => JSX.Element;