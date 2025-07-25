import type { JSX } from "react";

import selectors from "../scss/Presentation.module.scss";

import { Link } from "react-router-dom";

import useAuth from "@hook/use-auth/use-auth.hook";

import testSourceCodeImage from "../Test.png";
import logo from "../logo-earesed.png";

import PresentationCards from "./Presentation-Cards.component";

export default function Presentation(): JSX.Element {
	const { account } = useAuth();

	return(
		<div className={`fr-c-c-n ${selectors.presentation_container}`}>
			<div className={`fc-c-n-xl ${selectors.presentation_body}`}>
				<div className={`fr-c-n-m ${selectors.presentation_head}`}>
					<img className={selectors.presentation_logo} src={logo}/>
					<h1>Code Hub</h1>
				</div>
				<div className={`fc-n-n-xs ${selectors.presentation_imgs}`}>
					<div className="fr-n-n-xs">
						<img src={testSourceCodeImage} alt="Code"/>
						<img src={testSourceCodeImage} alt="Code"/>
					</div>
					<div className="fr-n-n-xs">
						<img src={testSourceCodeImage} alt="Code"/>
						<img src={testSourceCodeImage} alt="Code"/>
					</div>
				</div>
				<PresentationCards/>
				{!account ?
				<div className={`fr-c-n-m ${selectors.presentation_actions_container}`}>
					<Link className={selectors.presentation_link} to="/sign-in">Log in</Link>
					<p>or</p>
					<Link className={selectors.presentation_link} to="/sign-up">Create a Account</Link>
				</div> : null}
			</div>
		</div>
	);
};