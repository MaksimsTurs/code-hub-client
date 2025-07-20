import type { JSX } from "react";

import { SkeletonContainer, SkeletonBody, SkeletonSection, SkeletonBox, SkeletonCircle } from "@component/Skeleton/Skeleton.component";

import selectors from "./Loader.module.scss";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fr-n-n-xs">
			<SkeletonSection layout="fc-n-n-xs">
				<SkeletonBody layout="fc-n-n-xs" padding="1.5rem" width="18rem">
					<SkeletonSection layout="fc-c-c-xs">
						<SkeletonCircle width="6rem" height="6rem"/>
					</SkeletonSection>
						<SkeletonBox width="100%" height="2rem"/>
						<SkeletonBox width="75%" height="1.2rem"/>
				</SkeletonBody>
				<SkeletonSection layout="fr-n-n-xs">
					<SkeletonBox width="100%" height="2.5rem"/>
					<SkeletonBox width="100%" height="2.5rem"/>
					<SkeletonBox width="100%" height="2.5rem"/>
				</SkeletonSection>
			</SkeletonSection>
			<SkeletonBody layout="fc-n-n-xs" padding="1.5rem" width="100%">
				<SkeletonSection layout="fc-n-n-xs" className={selectors.skeleton_bordered}>
					<SkeletonSection layout="fr-n-sp-xs">
						<SkeletonBox width="12rem" height="2rem"/>
						<SkeletonBox width="5rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="4rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="3rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
					</SkeletonSection>
				</SkeletonSection>
				<SkeletonSection layout="fc-n-n-xs" className={selectors.skeleton_bordered}>
					<SkeletonSection layout="fr-n-sp-xs">
						<SkeletonBox width="12rem" height="2rem"/>
						<SkeletonBox width="5rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="4rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="3rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
					</SkeletonSection>
				</SkeletonSection>
				<SkeletonSection layout="fc-n-n-xs" className={selectors.skeleton_bordered}>
					<SkeletonSection layout="fr-n-sp-xs">
						<SkeletonBox width="12rem" height="2rem"/>
						<SkeletonBox width="5rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fc-n-n-xs">
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="4rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
						<SkeletonSection layout="fr-n-n-xs">
							<SkeletonBox width="3rem" height="1rem"/>
							<SkeletonBox width="12rem" height="1rem"/>
							<SkeletonBox width="6rem" height="1rem"/>
							<SkeletonBox width="2rem" height="1rem"/>
						</SkeletonSection>
					</SkeletonSection>
				</SkeletonSection>
			</SkeletonBody>
		</SkeletonContainer>
	);
};