import type { JSX } from "react";
import type { TSideMenuLinkProps } from "../Side-Menu.component.type";

import selectors from "../scss/Side-Menu-Link.module.scss";

import { useLocation, Link } from "react-router-dom";

export default function SideMenuLink({ href, children, ...otherProps }: TSideMenuLinkProps): JSX.Element {
	const location = useLocation();
	const isCurrentPage: boolean = href === location.pathname;

	return(
		<Link 
			className={`fr-c-n-xs ${selectors.asside_link} ${isCurrentPage ? selectors.aside_link_active : ""}`} 
			to={href}
			{...otherProps}> 
			{children}
		</Link>
	);
};