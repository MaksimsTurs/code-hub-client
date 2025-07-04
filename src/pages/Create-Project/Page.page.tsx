import type { JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { TCodeHubProject } from "@/reducers/use-code-hub/use-code-hub.slice.type";

import { useForm } from "react-hook-form";

import Form from "@/components/Form/Form.component";
import FormSection from "@/components/Form/Form-Sector.component";
import InputText from "@/components/Inputs/Input-Text/Input-Text.component";
import InputRadio from "@/components/Inputs/Input-Radio/Input-Radio.component";
import Button from "@/components/Button/Button.component";

import useMutate from "@/hooks/use-fetch/use-mutate.hook";
import useAuth from "@/hooks/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const { withAuth } = useAuth();
	const { register, reset, handleSubmit, formState: { errors }} = useForm<TCodeHubProject>();
	const { mutate } = useMutate<TCodeHubProject[], TCodeHubProject, TCodeHubProject[]>("project/all", async function(body, currState) {
		const newProject = await withAuth<TCodeHubProject>("post", "project/create", body);
	
		if(newProject) {
			return [...currState || [], newProject.data!];
		}

		return currState;
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
						error={errors.name?.message}
						autoComplete="on"
						type="text" 
						spellCheck="false" 
						name="name" 
						placeholder="Project name"
						validation={{
							maxLength: { message:"Name is to long!", value: 20 },
							minLength: { message: "Name is to short!", value: 3 },
							required: { message: "Name is required!", value: true }
						}}/>
					<InputText<TCodeHubProject>
						register={register}
						autoComplete="on"
						type="text"
						spellCheck="false" 
						name="description" 
						placeholder="Project description"
						validation={{	maxLength: { message:"Description is to long!", value: 250 }}}/>
				</FormSection>
				<FormSection title="Privacity">
					<InputRadio<TCodeHubProject>
						register={register}
						defaultChecked
						name="visibility"
						label="Public"
						value="public"
						description="Project can be seed by any one."/>
					<InputRadio<TCodeHubProject>
						register={register}
						name="visibility"
						label="Private"
						value="private"
						description="Project can be seed only you."/>
					<InputRadio<TCodeHubProject>
						register={register}
						name="visibility"
						label="Protected"
						value="protected"
						description="Project can be seed only by you and you team."/>
				</FormSection>
				<Button type="submit">Create Project</Button>
			</Form>
		</div>
	);
};