import type { JSX } from "react";
import type { TAccount } from "@root/global.type";

import { useState } from "react";

import { 
	IconUser, 
	IconUserPlus, 
	IconCreateFolder, 
	IconBookMarked, 
	IconFolderDot,
	IconCircleQuestionMark,
	IconMessageCircleQuestionMark,
	IconHouse,
	IconUserCircle
} from "../Icons/SVG-Icons.component";

import ItemLoader from "./Item-Loader.component";
import SideMenuLink from "./components/Side-Menu-Link.component";

import selectors from "./Side-Menu.module.scss";

import useAuth from "@hook/use-auth/use-auth.hook";

import logoSrc from "./images/logo.webp";

export default function SideMenu(): JSX.Element {
	const { isAuth, account } = useAuth<TAccount>();
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expandSideMenu = (): void => {
		setIsExpanded(prev => !prev);
	};

	return(
		<aside className={`${!isExpanded ? selectors.asside_container_close : ""} ${selectors.asside_container}`}>
			<button tabIndex={-1} onClick={expandSideMenu} className={`fr-c-c-n ${selectors.asside_logo_container}`} aria-label="Side menu resizer.">
				<img src={logoSrc} alt="Code Hub logo." title="Code Hub logo."/>
			</button>
			{isAuth ? 
			<div className={`fc-n-n-xs ${selectors.asside_links_container}`}>
				<ItemLoader/>
				<ItemLoader/>
			</div> : account ? 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<SideMenuLink
					href={`/account/${account._id}`} 
					aria-label="Link to user page.">
					<IconUserCircle strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>{account.name}</p>
				</SideMenuLink>
			</div> : 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<SideMenuLink 
					href="/sign-in" 
					aria-label="Link to sign in site.">
					<IconUser strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Sign in</p>
				</SideMenuLink>
				<SideMenuLink 
					href="/sign-up" 
					aria-label="Link to sign up site.">
					<IconUserPlus strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Sign up</p>
				</SideMenuLink>
			</div>}
			{isAuth ?
			<div className={`fc-n-n-xs ${selectors.asside_links_container}`}>
				<ItemLoader/>
				<ItemLoader/>
			</div> : account ? 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<SideMenuLink 
					href="/project/create" 
					aria-label="Link to create project site.">
					<IconCreateFolder strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Create</p>
				</SideMenuLink>
				<SideMenuLink 
					href="/account/projects" 
					aria-label="Link to site with you projects.">
					<IconFolderDot strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Projects</p>
				</SideMenuLink>
				<SideMenuLink 
					href="/documentation" 
					aria-label="Link to code hub Documentation.">
					<IconBookMarked strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Documentation</p>
				</SideMenuLink>
			</div> : null}
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<SideMenuLink 
					href="/" 
					aria-label="Link to the Home site.">
					<IconHouse strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Home</p>
				</SideMenuLink>
				<SideMenuLink
					href="/about" 
					aria-label="Link About us site.">
					<IconCircleQuestionMark strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>About</p>
				</SideMenuLink>
				<SideMenuLink 
					href="/support" 
					aria-label="Link to support site.">
					<IconMessageCircleQuestionMark strokeWidth={2} width={20} height={20}/>
					<p className={selectors.asside_link_name}>Support</p>
				</SideMenuLink>
			</div>
		</aside>
	);
};