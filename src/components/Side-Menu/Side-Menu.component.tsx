import type { JSX } from "react";
import type { TAccount } from "@root/global.type";

import { useState } from "react";
import { Link } from "react-router-dom";

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

import selectors from "./Side-Menu.module.scss";

import useAuth from "@root/hooks/use-auth/use-auth.hook";

import logoSrc from "./images/logo.webp";

export default function SideMenu(): JSX.Element {
	const { isPending, account } = useAuth<TAccount>();
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expandSideMenu = (): void => {
		setIsExpanded(prev => !prev);
	};

	return(
		<aside className={`${!isExpanded ? selectors.asside_container_close : ""} ${selectors.asside_container}`}>
			<button onClick={expandSideMenu} className={`fr-c-c-n ${selectors.asside_logo_container}`} aria-label="Side menu resizer.">
				<img src={logoSrc} alt="Code Hub logo."/>
			</button>
			{isPending ? 
			<div className={`fc-n-n-xs ${selectors.asside_links_container}`}>
				<ItemLoader/>
				<ItemLoader/>
			</div> : account ? 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to={`/user/${account._id}`} aria-label="Link to user page.">
					<IconUserCircle strokeWidth={2} width={20} height={20}/>
					<p>{account.name}</p>
				</Link>
			</div> : 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/sign-in" aria-label="Link to sign in site.">
					<IconUser strokeWidth={2} width={20} height={20}/>
					<p>Sign in</p>
				</Link>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/sign-up" aria-label="Link to sign up site.">
					<IconUserPlus strokeWidth={2} width={20} height={20}/>
					<p>Sign up</p>
				</Link>
			</div>}
			{isPending ?
			<div className={`fc-n-n-xs ${selectors.asside_links_container}`}>
				<ItemLoader/>
				<ItemLoader/>
			</div> : account ? 
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/project/create" aria-label="Link to create project site.">
					<IconCreateFolder strokeWidth={2} width={20} height={20}/>
					<p>Create</p>
				</Link>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to={`/user/${account?._id}/projects`} aria-label="Link to site with you projects.">
					<IconFolderDot strokeWidth={2} width={20} height={20}/>
					<p>Projects</p>
				</Link>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/documentation" aria-label="Link to code hub Documentation.">
					<IconBookMarked strokeWidth={2} width={20} height={20}/>
					<p>Documentation</p>
				</Link>
			</div> : null}
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/" aria-label="Link to the Home site.">
					<IconHouse strokeWidth={2} width={20} height={20}/>
					<p>Home</p>
				</Link>
			</div>
			<div className={`fc-n-n-n ${selectors.asside_links_container}`}>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/about" aria-label="Link About us site.">
					<IconCircleQuestionMark strokeWidth={2} width={20} height={20}/>
					<p>About</p>
				</Link>
				<Link className={`fr-c-n-xs ${selectors.asside_link}`} to="/support" aria-label="Link to suppor site.">
					<IconMessageCircleQuestionMark strokeWidth={2} width={20} height={20}/>
					<p>Support</p>
				</Link>
			</div>
		</aside>
	);
};