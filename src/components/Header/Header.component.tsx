import type { JSX } from "react";
import type { TAccount } from "@root/global.type";

import selectors from "./Header.module.scss";

import { Link } from "react-router-dom";
import { Fragment } from "react";

import UserSection from "./component/User-Section.component";

import useAuth from "@hook/use-auth/use-auth.hook";

export default function Header(): JSX.Element {
	const { account, isPending } = useAuth<TAccount>();

	return(
		<header className={selectors.header_container}>
			<div className="fr-c-sp-xs">
				<Link to="/">
					<h1 className={`fr-n-n-n ${selectors.header_website_name}`}>
						<p>Code Hub</p>
						<p>_</p>
					</h1>
				</Link>
				<section className="fr-n-n-m">
					{isPending ? null : account ? <UserSection account={account}/> : 
					<Fragment>
						<Link className={selectors.header_user_auth} to="/sign-in">Sign in</Link>
						<Link className={selectors.header_user_auth} to="/sign-up">Sign up</Link>						
					</Fragment>}
				</section>
			</div>
			<nav className={`fr-n-n-m ${selectors.header_nav_container}`}>
				{isPending ? null :
				<Fragment>
					<Link to="/about">About</Link>
					<Link to="/documentation">Documentation</Link>
					<Link to="/support">Support</Link>
					{account ? <Fragment>
						<Link to={`/user/${account._id}/projects`}>Projects</Link>
						<Link to="/project/create">Create Project</Link>
					</Fragment> : null}
				</Fragment>}
			</nav>
		</header>
	);
};