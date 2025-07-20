import type { JSX } from "react";

import { IconX } from "@component/Icons/SVG-Icons.component";

import useConfirm from "@hook/use-confirm/use-confirm.hook";

import selectors from "./Confirm-Modal.module.scss";

export default function ConfirmModal(): JSX.Element {
	const { respond, data, isVisible } = useConfirm<{ title: string, text: string }>();
	
	return(
		<div className={`fr-c-c-n ${selectors.confirm_modal_container} ${isVisible ? selectors.confirm_modal_container_open : ""}`}>
			<div className={selectors.confirm_modal_body}>
				<section className={`fr-c-sp-xs ${selectors.confirm_modal_head}`}>
					<p>{data?.title}</p>
					<button onClick={() => respond(false)} className="fr-c-c-n">
						<IconX width={19} height={19}/>
					</button>
				</section>
				<section className={selectors.confirm_modal_section}>
					<p>{data?.text}</p>
					<div className="fr-c-c-n">
						<button className={selectors.confirm_modal_button} onClick={() => respond(true)}>Confirm</button>
					</div>
				</section>
			</div>
		</div>
	)
};