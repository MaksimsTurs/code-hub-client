import type { JSX } from "react";

import selectors from "./Loader.module.scss"

import { SkeletonBox, SkeletonCircle, SkeletonContainer, SkeletonBody, SkeletonSection } from "@root/components/Skeleton/Skeleton.component";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fr-c-c-n">
			<SkeletonBody layout="fc-n-n-n" padding="2rem" width="32rem">
				<SkeletonSection layout="fr-c-n-xs" className={selectors.skeleton_head}>
					<SkeletonCircle width="48px" height="48px"/>
					<SkeletonBox height="2.5rem" width="8rem"/>
				</SkeletonSection>
				<SkeletonSection layout="fr-c-c-n">
					<SkeletonBox height="5rem" width="9rem"/>
				</SkeletonSection>
				<SkeletonSection layout="fc-n-n-m">
					<SkeletonSection layout="fc-n-n-m">
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonBox height="1.1rem" width="5rem"/>
							<SkeletonBox height="2rem" width="100%"/>
						</SkeletonSection>
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonBox height="1.1rem" width="6.5rem"/>
							<SkeletonBox height="2rem" width="100%"/>
						</SkeletonSection>
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonBox height="1.1rem" width="5rem"/>
							<SkeletonBox height="2rem" width="100%"/>
						</SkeletonSection>
					</SkeletonSection>
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonBox height="1rem" width="6.5rem"/>
						<SkeletonBox height="2rem" width="5.75rem"/>
					</SkeletonSection>
				</SkeletonSection>
			</SkeletonBody>
		</SkeletonContainer>
	);
};