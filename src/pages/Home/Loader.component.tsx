import type { JSX } from "react";

import { SkeletonContainer, SkeletonBody, SkeletonSection, SkeletonBox } from "@root/components/Skeleton/Skeleton.component";

export default function Loader(): JSX.Element {
	return(
		<SkeletonContainer layout="fc-c-c-xs">
			<SkeletonBody layout="fc-c-c-m" width="100%" padding="3rem">
				<SkeletonSection layout="fr-n-n-xs">
					<SkeletonBox width="10rem" height="3rem"/>
					<SkeletonBox width="8rem" height="3rem"/>
				</SkeletonSection>
				<SkeletonSection layout="fc-c-c-xs">
					<SkeletonSection layout="fr-n-n-xs">
						<SkeletonBox width="3rem" height="1rem"/>
						<SkeletonBox width="6rem" height="1rem"/>
						<SkeletonBox width="12rem" height="1rem"/>
						<SkeletonBox width="4.5rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fr-n-n-xs">
						<SkeletonBox width="12rem" height="1rem"/>
						<SkeletonBox width="3.5rem" height="1rem"/>
						<SkeletonBox width="6rem" height="1rem"/>
						<SkeletonBox width="9.6rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fr-n-n-xs">
						<SkeletonBox width="4rem" height="1rem"/>
						<SkeletonBox width="9.2rem" height="1rem"/>
						<SkeletonBox width="2.6rem" height="1rem"/>
						<SkeletonBox width="10rem" height="1rem"/>
					</SkeletonSection>
					<SkeletonSection layout="fr-n-n-xs">
						<SkeletonBox width="3.5rem" height="1rem"/>
						<SkeletonBox width="5.3rem" height="1rem"/>
						<SkeletonBox width="2.5rem" height="1rem"/>
						<SkeletonBox width="4.2rem" height="1rem"/>
					</SkeletonSection>
				</SkeletonSection>
				<SkeletonSection layout="fc-c-c-xs">
					<SkeletonSection layout="fr-n-n-xs">
						<SkeletonBox width="15rem" height="7rem"/>
						<SkeletonBox width="15rem" height="7rem"/>				
					</SkeletonSection>
					<SkeletonBox width="30.5rem" height="7rem"/>				
				</SkeletonSection>
				<SkeletonSection layout="fr-c-n-m">
					<SkeletonBox height="2.5rem" width="5rem"/>
					<SkeletonBox height="1.5rem" width="1.5rem"/>
					<SkeletonBox height="2.5rem" width="8rem"/>
				</SkeletonSection>
			</SkeletonBody>
			<SkeletonSection layout="fc-c-c-xs">
				<SkeletonSection layout="fr-n-n-xs">
					<SkeletonBody layout="fc-n-n-xs" width="20rem" padding="1rem">
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonSection layout="fr-n-n-xs">
								<SkeletonBox width="2.5rem" height="2.5rem"/>
								<SkeletonBox width="12rem" height="2.5rem"/>
							</SkeletonSection>
							<SkeletonSection layout="fc-n-n-xs">
								<SkeletonBox width="6rem" height="1rem"/>
								<SkeletonBox width="3rem" height="1rem"/>
								<SkeletonBox width="9.5rem" height="1rem"/>
								<SkeletonBox width="4.2rem" height="1rem"/>
								<SkeletonBox width="12rem" height="1rem"/>
								<SkeletonBox width="100%" height="1rem"/>
							</SkeletonSection>
						</SkeletonSection>
					</SkeletonBody>
					<SkeletonBody layout="fc-n-n-xs" width="20rem" padding="1rem">
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonSection layout="fr-n-n-xs">
								<SkeletonBox width="2.5rem" height="2.5rem"/>
								<SkeletonBox width="9.2rem" height="2.5rem"/>
							</SkeletonSection>
							<SkeletonSection layout="fc-n-n-xs">
								<SkeletonBox width="9rem" height="1rem"/>
								<SkeletonBox width="10rem" height="1rem"/>
								<SkeletonBox width="8.6rem" height="1rem"/>
								<SkeletonBox width="9.9rem" height="1rem"/>
								<SkeletonBox width="5.3rem" height="1rem"/>
								<SkeletonBox width="11rem" height="1rem"/>
							</SkeletonSection>
						</SkeletonSection>
					</SkeletonBody>
				</SkeletonSection>
				<SkeletonSection layout="fr-n-n-xs">
					<SkeletonBody layout="fc-n-n-xs" width="20rem" padding="1rem">
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonSection layout="fr-n-n-xs">
								<SkeletonBox width="2.5rem" height="2.5rem"/>
								<SkeletonBox width="7rem" height="2.5rem"/>
							</SkeletonSection>
							<SkeletonSection layout="fc-n-n-xs">
								<SkeletonBox width="12rem" height="1rem"/>
								<SkeletonBox width="100%" height="1rem"/>
								<SkeletonBox width="3.5rem" height="1rem"/>
								<SkeletonBox width="8rem" height="1rem"/>
								<SkeletonBox width="100%" height="1rem"/>
								<SkeletonBox width="15rem" height="1rem"/>
							</SkeletonSection>
						</SkeletonSection>
					</SkeletonBody>
					<SkeletonBody layout="fc-n-n-xs" width="20rem" padding="1rem">
						<SkeletonSection layout="fc-n-n-xs">
							<SkeletonSection layout="fr-n-n-xs">
								<SkeletonBox width="2.5rem" height="2.5rem"/>
								<SkeletonBox width="8rem" height="2.5rem"/>
							</SkeletonSection>
							<SkeletonSection layout="fc-n-n-xs">
								<SkeletonBox width="100%" height="1rem"/>
								<SkeletonBox width="8rem" height="1rem"/>
								<SkeletonBox width="4rem" height="1rem"/>
								<SkeletonBox width="2rem" height="1rem"/>
								<SkeletonBox width="9rem" height="1rem"/>
								<SkeletonBox width="10rem" height="1rem"/>
							</SkeletonSection>
						</SkeletonSection>
					</SkeletonBody>
				</SkeletonSection>
			</SkeletonSection>
		</SkeletonContainer>
	);
};