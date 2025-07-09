import type { JSX } from "react";

import selectors from "../scss/Presentation.module.scss";

import { Link } from "react-router-dom";

import testSourceCodeImage from "../Test.png";

export default function Presentation(): JSX.Element {
	return(
		<div className={`fr-n-c-n ${selectors.presentation_container}`}>
			<div className="fc-c-n-m">
				<h2>Code Hub</h2>
				<p className={selectors.presentation_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, minus doloremque inventore reprehenderit rem quas iste a tempore voluptatem animi delectus voluptate. Hic incidunt modi enim! Voluptatibus impedit doloribus nisi!</p>
				<div className="fc-n-n-xs">
					<div className="fr-n-n-xs">
						<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
						<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
					</div>
					<img className={selectors.presentation_img} src={testSourceCodeImage} alt="Code"/>
				</div>
				<div className={`fr-c-n-m ${selectors.presintation_actions_container}`}>
					<Link to="/sign-in">Log in</Link>
					<p>or</p>
					<Link to="/sign-up">Create a Account</Link>
				</div>
			</div>
		</div>
	);
};