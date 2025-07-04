import type { JSX } from "react";
import type { TSVGIconProps } from "./Icons.component.type";

export function IconBookCopy(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M2 16V4a2 2 0 0 1 2-2h11"/>
				<path d="M22 18H11a2 2 0 1 0 0 4h11V7a1 1 0 0 0 0-1H11a2 2 0 0 0-2 2v12M5 14H4a2 2 0 1 0 0 4h1"/>
		</svg>
	);
};

export function IconBraces(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5l2 2h1M16 21h1a2 2 0 0 0 2-2v-5l2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>
		</svg>
	);
};

export function IconLightBulb(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="m15 14 2-2 1-4A6 6 0 0 0 6 8l2 4 1 2M9 18h6M10 22h4"/>
		</svg>
	);
};

export function IconRocket(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M5 17c-2 1-2 5-2 5l5-2-1-3a2 2 0 0 0-2-1zM12 15l-3-3a22 22 0 0 1 2-4 13 13 0 0 1 11-6c0 3-1 8-6 11a22 22 0 0 1-4 2z"/>
				<path d="M9 12H4l2-4h5M12 15v5l4-2v-5"/>
		</svg>
	);
};

export function IconCircleX(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			viewBox="0 0 24 24" 
			fill="none" 
			stroke="currentColor" 
			strokeWidth="2" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			{...props }>
				<circle cx="12" cy="12" r="10"/>
				<path d="m4.9 4.9 14.2 14.2"/>
		</svg>
	);
};

export function IconImage(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
				<circle cx="9" cy="9" r="2"/>
				<path d="m21 15-3-3a2 2 0 0 0-3 0l-9 9"/>
		</svg>
	);
};

export function IconPlus(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			width={20} 
			height={20} 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M5 12h14M12 5v14"/>
		</svg>
	);
};