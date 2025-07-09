import type { JSX } from "react";

import selectors from "./Loader.module.scss"

import { SkeletonContainer, SkeletonBody, SkeletonSection, SkeletonBox } from "@root/components/Skeleton/Skeleton.component";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fc-c-c-xs">
			<SkeletonBody layout="fc-n-n-xs" width="25rem" padding="2rem">
				<div className={selectors.skeleton_head}>
					<SkeletonBox width="13rem" height="2rem"/>
				</div>
				<SkeletonSection layout="fc-n-n-xs">
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonBox width="5rem" height="1rem"/>
						<SkeletonBox width="100%" height="2rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonBox width="5rem" height="1rem"/>
						<SkeletonBox width="100%" height="2rem"/>
					</SkeletonSection>
				</SkeletonSection>
				<div style={{ paddingTop: "1rem" }} className={selectors.skeleton_head}>
					<SkeletonBox width="13rem" height="2rem"/>
				</div>
				<SkeletonSection layout="fc-n-n-xs">
					<SkeletonBox width="100%" height="4rem"/>
					<SkeletonBox width="100%" height="4rem"/>
					<SkeletonBox width="100%" height="4rem"/>
				</SkeletonSection>
				<SkeletonBox width="8rem" height="1.95rem"/>
			</SkeletonBody>
		</SkeletonContainer>
	);
};