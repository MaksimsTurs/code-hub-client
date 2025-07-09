import type { JSX } from "react";
import type { TSignUpData, TSignInServerError } from "./Page.page.type";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from "@component/Form/Form.component";
import FormHeader from "@root/components/Form/Form-Header.component";
import InputFile from "@component/Inputs/Input-File/Input-File.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import Button from "@component/Button/Button.component";
import { IconUserCircle } from "@root/components/Icons/SVG-Icons.component";

import std from "@util/std/std.util";

import useAuth from "@hook/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const navigate = useNavigate();
	const { authentication, error } = useAuth<unknown, TSignInServerError>();
	const { handleSubmit, register, reset, formState: { errors }} = useForm<TSignUpData>()

	const signUp: SubmitHandler<TSignUpData> = (data): void => {
		authentication("user/sign-up", std.object.createFormDataFromJSON(data));
		reset();
		navigate("/");
	};

	return(
		<div style={{ height: "100%" }} className="fr-c-c-n">
			<Form onSubmit={handleSubmit(signUp)}>
				<FormHeader>
					<IconUserCircle width={36} height={36}/>
					<h1>Sign up</h1>
				</FormHeader>
				<div className="fr-n-c-n">
					<InputFile<TSignUpData> name="avatar" label="Avatar" register={register}/>
				</div>
				<InputText<TSignUpData>
					register={register}
					name="name"
					placeholder="Pass you name here.."
					label="Name"
					type="text"
					autoComplete="name"
					error={errors.name?.message}
					aria-required
					aria-invalid={!!(error?.messages?.name || errors.name?.message)}
					aria-errormessage={error?.messages?.name || errors.name?.message}
					validation={{
						pattern:   { value: /[A-Za-z0-9_-]/, message: "Name is not correct!" },
						maxLength: { value: 20, message: "Name is to long!" },
						required:  { value: true, message: "Name is required!" }
					}}/>
				<InputText<TSignUpData>
					register={register}
					name="email"
					label="E - Mail"
					autoComplete="email"
					placeholder="Pass you e - mail here.."
					type="email"
					error={errors.email?.message}
					aria-required
					aria-invalid={!!(error?.messages?.email || errors.email?.message)}
					aria-errormessage={error?.messages?.email || errors.email?.message}
					validation={{
						pattern:  { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "E - Mail is not correct!" },
						required: { value: true, message: "E - Mail is required" }
					}}/>
				<InputText<TSignUpData>
					register={register}
					name="password"
					label="Password"
					autoComplete="current-password"
					placeholder="Pass you password here..."
					type="password"
					error={errors.password?.message}
					aria-required
					aria-invalid={!!(error?.messages?.password || errors.password?.message)}
					aria-errormessage={error?.messages?.password || errors.password?.message}
					validation={{
						minLength: { value: 12, message: "Password is to short!" },
						required:  { value: true, message: "Passowrd is required!" }
					}}/>
				<Button>Sign Up</Button>
			</Form>
		</div>
	);
};