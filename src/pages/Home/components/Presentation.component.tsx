import type { JSX } from "react";

import selectors from "../scss/Presentation.module.scss";

import { Link } from "react-router-dom";

import useAuth from "@hook/use-auth/use-auth.hook";

import testSourceCodeImage from "../Test.png";

export default function Presentation(): JSX.Element {
	const { account } = useAuth();

	return(
		<div className={`fr-n-c-n ${selectors.presentation_container}`}>
			<div className="fc-c-n-m">
				<h1>Code Hub</h1>
				<p className={selectors.presentation_description}>Eine moderne, leichte Alternative zu GitHub – verwalte Repositories, Issues und Projekte effizient und unabhängig. Für Entwickler, die Kontrolle, Übersicht und Performance schätzen.</p>
				<div className="fc-n-n-xs">
					<div className="fr-n-n-xs">
						<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
						<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
					</div>
					<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
				</div>
				{account ? null :
				<div className={`fr-c-n-m ${selectors.presintation_actions_container}`}>
					<Link className={`${selectors.presintation_link} accessibility_bordered-heaven_blue`} to="/sign-in">Log in</Link>
					<p>or</p>
					<Link className={`${selectors.presintation_link} accessibility_bordered-heaven_blue`} to="/sign-up">Create a Account</Link>
				</div>}
			</div>
		</div>
	);
};