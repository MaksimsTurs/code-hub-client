import type { JSX } from "react";
import type { TSVGIconProps } from "./Icons.component.type";

export function IconBookCopy(props: TSVGIconProps): JSX.Element {
	return(
		<svg
			strokeWidth="1"
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
			strokeWidth="1"
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
			strokeWidth="1"
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
			strokeWidth="1"
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
			strokeWidth="1"
			viewBox="0 0 24 24" 
			fill="none" 
			stroke="currentColor" 
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
			strokeWidth="1"
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
			strokeWidth="1"
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

export function IconUserCircle(props: TSVGIconProps): JSX.Element {
	return(
		<svg
			strokeWidth="1"
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M18 20a6 6 0 0 0-12 0"/>
				<circle cx="12" cy="10" r="4"/>
				<circle cx="12" cy="12" r="10"/>
		</svg>
	);
};

export function IconEye(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M2 12a1 1 0 0 1 0 0 11 11 0 0 1 20 0 1 1 0 0 1 0 0 11 11 0 0 1-20 0"/>
				<circle cx="12" cy="12" r="3"/>
		</svg>
	);
};

export function IconEyeOff(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="m15 18-1-3M2 8a11 11 0 0 0 20 0M20 15l-2-2M4 15l2-2M9 18l1-3"/>
		</svg>
	);
};

export function IconUser(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
				<circle cx="12" cy="7" r="4"/>
		</svg>
	);
};

export function IconUserPlus(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
				<circle cx="9" cy="7" r="4"/>
				<path d="M19 8v6M22 11h-6"/>
		</svg>
	);
};

export function IconCreateFolder(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M12 10v6M9 13h6M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8a2 2 0 0 1-2-1V4a2 2 0 0 0-2-1H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
		</svg>
	);
};

export function IconBookMarked(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M10 2v8l3-3 3 3V2"/><path d="M4 20V5a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1 0-5h13"/>
		</svg>
	);
};

export function IconFolderDot(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8a2 2 0 0 1-2-1V4a2 2 0 0 0-2-1H4a2 2 0 0 0-2 2v13l2 2Z"/><circle cx="12" cy="13" r="1"/>
		</svg>
	);
};

export function IconCircleQuestionMark(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 0 1 6 1c0 2-3 3-3 3M12 17h0"/>
		</svg>
	);
};

export function IconMessageCircleQuestionMark(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor"
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M8 20a9 9 0 1 0-4-4l-2 6Z"/>
				<path d="M9 9a3 3 0 0 1 6 1c0 2-3 3-3 3M12 17h0"/>
		</svg>
	);
};

export function IconHouse(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
				<path d="M3 10a2 2 0 0 1 1-2l7-6a2 2 0 0 1 2 0l7 6a2 2 0 0 1 1 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
		</svg>
	);
};

export function IconTrash2(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M10 11v6M14 11v6M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
		</svg>
	);
};

export function IconPencil(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M21 7a1 1 0 0 0-4-4L4 16a2 2 0 0 0-1 1l-1 4a1 1 0 0 0 1 1l4-1a2 2 0 0 0 1-1zM15 5l4 4"/>
		</svg>
	);
};

export function IconLogOut(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="m16 17 5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
		</svg>
	);
};

export function IconPackageOpen(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props }>
				<path d="M12 22v-9M15 2a2 2 0 0 1 2 0l4 3a2 2 0 0 1 0 3L9 15a2 2 0 0 1-2 0l-4-3a2 2 0 0 1 0-3z"/>
				<path d="M20 13v4a2 2 0 0 1-1 2l-6 3a2 2 0 0 1-2 0l-6-3a2 2 0 0 1-1-2v-4"/>
				<path d="M21 12a2 2 0 0 0 0-3L9 2a2 2 0 0 0-2 0L3 5a2 2 0 0 0 0 3l12 7a2 2 0 0 0 2 0z"/>
		</svg>
	);
};

export function IconX(props: TSVGIconProps): JSX.Element {
	return(
		<svg 
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			viewBox="0 0 24 24"
			{...props }>
				<path d="M18 6 6 18M6 6l12 12"/>
		</svg>
	);
};

export function IconSetting(props: TSVGIconProps): JSX.Element {
	return(
		<svg
			fill="none" 
			stroke="currentColor" 
			strokeLinecap="round" 
			strokeLinejoin="round"
			{...props }>
				<path d="M12 2h0a2 2 0 0 0-2 2v0a2 2 0 0 1-1 2H8a2 2 0 0 1-2 0h0a2 2 0 0 0-3 1h0a2 2 0 0 0 1 3h0a2 2 0 0 1 1 2v0a2 2 0 0 1-1 2h0a2 2 0 0 0-1 3h0a2 2 0 0 0 3 1h0a2 2 0 0 1 2 0h1a2 2 0 0 1 1 2v0a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v0a2 2 0 0 1 1-2h1a2 2 0 0 1 2 0h0a2 2 0 0 0 3-1h0a2 2 0 0 0-1-3h0a2 2 0 0 1-1-2v0a2 2 0 0 1 1-2h0a2 2 0 0 0 1-3h0a2 2 0 0 0-3-1h0a2 2 0 0 1-2 0h-1a2 2 0 0 1-1-2v0a2 2 0 0 0-2-2z"/>
				<circle cx="12" cy="12" r="3"/>
		</svg>
	)
}