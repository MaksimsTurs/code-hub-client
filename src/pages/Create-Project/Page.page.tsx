import type { JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { TProject } from "@root/global.type";
import type { TCreateProjectServerError } from "./Page.page.type";

import { useForm } from "react-hook-form";

import { Form, FormSection } from "@component/Form/Form.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import InputRadio, { InputRadioContainer } from "@component/Inputs/Input-Radio/Input-Radio.component";
import Button from "@component/Button/Button.component";
import ErrorBox from "@component/Errors/Error-Box/Error-Box.component";

import useFetch from "@hook/use-fetch/use-fetch.hook";
import useMutate from "@hook/use-fetch/use-mutate.hook";
import { useWithAuth } from "@hook/use-auth/use-auth.hook.ts";

export default function Page(): JSX.Element {
	const { register, reset, handleSubmit, formState: { errors }} = useForm<TProject>();
	const { withAuth } = useWithAuth<unknown, TCreateProjectServerError>();
	const { setNamedStateError } = useFetch();
	const { error, mutate } = useMutate<TProject[], TProject, TProject[]>("project/all", async function(body, currState) {
		const response = await withAuth<TProject, { accessToken: string }>({
			fetch: {
				method: "post",
				url: "project/create",
				body
			},
			refresh: {
				url: "account/refresh-access-token",
				extract: (response) => response.data!.accessToken
			}
		});

		if(!response.data && response.error) {
			setNamedStateError(`project/all`, response.error);
			return currState;
		}

		return [...currState || [], response.data!];
	});

	const createNewProject: SubmitHandler<TProject> = (data) => {
		mutate(data);
		reset();
	};

	return(
		<div className="fr-c-c-n">
			<Form onSubmit={handleSubmit(createNewProject)}>
				<FormSection title="Project Information">
					<InputText<TProject>
						register={register}
						label="Project name"
						placeholder="Project name"
						autoComplete="on"
						type="text" 
						spellCheck="false" 
						name="name" 
						error={(error as TCreateProjectServerError)?.messages.name || errors.name?.message}
						aria-required
						aria-invalid={!!((error as TCreateProjectServerError)?.messages?.name || errors.name?.message)}
						aria-errormessage={(error as TCreateProjectServerError)?.messages?.name || errors.name?.message}
						validation={{
							maxLength: { message:"Name is to long!", value: 20 },
							minLength: { message: "Name is to short!", value: 3 },
							required:  { message: "Name is required!", value: true }
						}}/>
					<InputText<TProject>
						register={register}
						autoComplete="on"
						type="text"
						spellCheck="false"
						label="Project description"
						name="description" 
						placeholder="Project description"
						error={(error as TCreateProjectServerError)?.messages.description || errors.description?.message}
						aria-required
						aria-invalid={!!((error as TCreateProjectServerError)?.messages?.name || errors.name?.message)}
						aria-errormessage={(error as TCreateProjectServerError)?.messages?.name || errors.name?.message}
						validation={{	maxLength: { message:"Description is to long!", value: 250 }}}/>
				</FormSection>
				<FormSection title="Privacity">
					<InputRadioContainer error={errors.visibility?.message}>
						<InputRadio<TProject>
							register={register}
							name="visibility"
							label="Public"
							value="public"
							error={errors.visibility?.message}
							description="Project can be seed by any one."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
						<InputRadio<TProject>
							register={register}
							name="visibility"
							label="Private"
							value="private"
							error={errors.visibility?.message}
							description="Project can be seed only by you."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
						<InputRadio<TProject>
							register={register}
							name="visibility"
							label="Protected"
							value="protected"
							error={errors.visibility?.message}
							description="Project can be seed only by you and your team."
							validation={{ required: { message: "Visibility is required!", value: true }}}/>
					</InputRadioContainer>
				</FormSection>
				{(error && (error as TCreateProjectServerError).code != 422) ? <ErrorBox message={(error as TCreateProjectServerError).message}/> : null}
				<Button type="submit">Create Project</Button>
			</Form>
		</div>
	);
};