import type { JSX, CSSProperties } from "react";
import type { 
	TSkeletonContainerProps,
	TSkeletonBodyProps,
	TSkeletonBoxProps, 
	TSkeletonCircleProps, 
	TSkeletonSectionProps 
} from "./Skeleton.component.type";

import selectors from "./Skeleton.module.scss";

export function SkeletonContainer(props: TSkeletonContainerProps): JSX.Element {
	return(<div className={`${props.layout} ${selectors.skeleton_container}`}>{props.children}</div>);
};

export function SkeletonBody(props: TSkeletonBodyProps): JSX.Element {
	const bodyStyles: CSSProperties = {
		width: props.width,
		padding: props.padding,
	};

	return(<div style={bodyStyles} className={`${props.layout} ${selectors.skeleton_body}`}>{props.children}</div>);
};

export function SkeletonSection(props: TSkeletonSectionProps): JSX.Element {
	return(<div className={`${props.layout} ${props.className || ""}`}>{props.children}</div>);
};

export function SkeletonBox(props: TSkeletonBoxProps): JSX.Element {
	const boxStyles: CSSProperties = {
		width: props.width,
		height: props.height
	};

	return(<div style={boxStyles} className={selectors.skeleton_box}></div>);
};

export function SkeletonCircle(props: TSkeletonCircleProps): JSX.Element {
	const circleStyles: CSSProperties = {
		width: props.width,
		height: props.height,
	};
	
	return(<div style={circleStyles} className={selectors.skeleton_circle}></div>);
};