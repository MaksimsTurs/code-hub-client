import type { JSX } from "react";

import selectors from "../scss/Account-Information.module.scss";

import Button from "@root/components/Button/Button.component";

import { IconUserCircle, IconPencil, IconTrash2, IconLogOut } from "@component/Icons/SVG-Icons.component";

export default function PersonalInformation(): JSX.Element {
	return(
		<section className="fc-n-n-xs">
			<div className={selectors.personal_information_container}>
				<div className="fc-n-n-xs">
					<div className="fr-c-c-n">
						<IconUserCircle width={120} height={120}/>
					</div>
					<div>
						<h2>Max Musterman</h2>
						<p>maxmusterman@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="fr-n-n-xs">
				<Button className={selectors.personal_information_action_button}>
					<IconTrash2 width={24} height={24}/>
				</Button>
				<Button className={selectors.personal_information_action_button}>
					<IconLogOut width={24} height={24}/>
				</Button>
				<Button className={selectors.personal_information_action_button}>
					<IconPencil width={24} height={24}/>
				</Button>
			</div>
		</section>
	);
};