import type { JSX } from "react";

import { SkeletonBox, SkeletonContainer, SkeletonBody, SkeletonSection } from "@root/components/Skeleton/Skeleton.component";

import selectors from "./Loader.module.scss";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fc-n-n-xs">
			<SkeletonBody layout="fc-n-n-xs" width="100%" padding="1.5rem">
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