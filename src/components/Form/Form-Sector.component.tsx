import type { JSX } from "react/jsx-runtime";
import type { TFormSectionProps } from "./Form.component.type";

import selectors from "./scss/Form-Sector.module.scss";

export default function FormSection({ title, children, ...props }: TFormSectionProps): JSX.Element {
	return(
		<section className={`fc-n-n-xs ${selectors.form_section}`} {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	);
};