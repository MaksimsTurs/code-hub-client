import type { JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type";
import type { TCreateProjectServerError } from "./Page.page.type";

import { useForm } from "react-hook-form";

import Form from "@component/Form/Form.component";
import FormSection from "@component/Form/Form-Sector.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import InputRadio, { InputRadioContainer } from "@component/Inputs/Input-Radio/Input-Radio.component";
import Button from "@component/Button/Button.component";
import ErrorBox from "@component/Errors/Error-Box/Error-Box.component";

import useMutate from "@hook/use-fetch/use-mutate.hook";
import useAuth from "@hook/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const { withAuth, error } = useAuth<unknown, TCreateProjectServerError>();
	const { register, reset, handleSubmit, formState: { errors }} = useForm<TCodeHubProject>();
	const { mutate } = useMutate<TCodeHubProject[], TCodeHubProject, TCodeHubProject[]>("project/all", async function(body, currState) {
		const newProject = await withAuth<TCodeHubProject>("post", "project/create", body);
					
		return [...currState || [], newProject];
	});

	const createNewProject: SubmitHandler<TCodeHubProject> = (data) => {
		mutate(data);
		reset();
	};

	return(
		<div className="fr-c-c-n">
			<Form onSubmit={handleSubmit(createNewProject)}>
				<FormSection title="Project Information">
					<InputText<TCodeHubProject>
						register={register}
						label="Project name"
						placeholder="Project name"
						autoComplete="on"
						type="text" 
						spellCheck="false" 
						name="name" 
						error={error?.messages.name || errors.name?.message}
						aria-required
						aria-invalid={!!(error?.messages?.name || errors.name?.message)}
						aria-errormessage={error?.messages?.name || errors.name?.message}
						validation={{
							maxLength: { message:"Name is to long!", value: 20 },
							minLength: { message: "Name is to short!", value: 3 },
							required:  { message: "Name is required!", value: true }
						}}/>
					<InputText<TCodeHubProject>
						register={register}
						autoComplete="on"
						type="text"
						spellCheck="false"
						label="Project description"
						name="description" 
						placeholder="Project description"
						error={error?.messages.description || errors.description?.message}
						aria-required
						aria-invalid={!!(error?.messages?.name || errors.name?.message)}
						aria-errormessage={error?.messages?.name || errors.name?.message}
						validation={{	maxLength: { message:"Description is to long!", value: 250 }}}/>
				</FormSection>
				<FormSection title="Privacity">
					<InputRadioContainer error={errors.visibility?.message}>
						<InputRadio<TCodeHubProject>
							register={register}
							name="visibility"
							label="Public"
							value="public"
							error={errors.visibility?.message}
							description="Project can be seed by any one."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
						<InputRadio<TCodeHubProject>
							register={register}
							name="visibility"
							label="Private"
							value="private"
							error={errors.visibility?.message}
							description="Project can be seed only by you."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
						<InputRadio<TCodeHubProject>
							register={register}
							name="visibility"
							label="Protected"
							value="protected"
							error={errors.visibility?.message}
							description="Project can be seed only by you and your team."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
					</InputRadioContainer>
				</FormSection>
				{error && error.code != 422 && <ErrorBox message={error.message}/>}
				<Button type="submit">Create Project</Button>
			</Form>
		</div>
	);
};