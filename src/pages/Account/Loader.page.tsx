import type { JSX } from "react";

import { SkeletonContainer } from "@root/components/Skeleton/Skeleton.component";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fc-n-n-xs"></SkeletonContainer>
	);
};