import type { JSX } from "react";
import type { TSignInData, TSignInServerError } from "./Page.page.type";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Form from "@component/Form/Form.component";
import FormHeader from "@component/Form/Form-Header.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import Button from "@component/Button/Button.component";
import ErrorBox from "@component/Errors/Error-Box/Error-Box.component";
import { IconUserCircle } from "@component/Icons/SVG-Icons.component";

import std from "@util/std/std.util";

import useAuth from "@hook/use-auth/use-auth.hook";
import selectors from "./Page.module.scss";

export default function Page(): JSX.Element {
	const navigate = useNavigate();
	const { authentication, error } = useAuth<unknown, TSignInServerError>();
	const { handleSubmit, register, reset, formState: { errors }} = useForm<TSignInData>()

	const signIn: SubmitHandler<TSignInData> = async(data): Promise<void> => {
		const isAuthenticated = await authentication("user/sign-in", std.object.createFormDataFromJSON(data));

		if(isAuthenticated) {
			reset();
			navigate("/");
		}
	};
	
	return(
		<div className={`fr-c-c-n ${selectors.signin_container}`}>
			<Form onSubmit={handleSubmit(signIn)}>
				<FormHeader>
					<IconUserCircle width={36} height={36}/>
					<h1>Sign in</h1>
				</FormHeader>
				<InputText<TSignInData>
					register={register}
					name="name"
					label="Name"
					autoComplete="name"
					placeholder="Pass you name here..."
					type="text"
					spellCheck={false}
					error={error?.messages?.name || errors.name?.message}
					aria-required
					aria-invalid={!!(error?.messages?.name || errors.name?.message)}
					aria-errormessage={error?.messages?.name || errors.name?.message}
					validation={{
						pattern:   { value: /[A-Za-z0-9_-]/, message: "Name is not correct!" },
						maxLength: { value: 20, message: "Name is to long!" },
						required:  { value: true, message: "Name is required!" }
					}}/>
				<InputText<TSignInData>
					register={register}
					name="email"
					label="E - mail"
					autoComplete="email"
					placeholder="Pass you e - mail here..."
					type="email"
					spellCheck={false}
					error={error?.messages?.email || errors.email?.message}
					aria-required
					aria-invalid={!!(error?.messages?.name || errors.name?.message)}
					aria-errormessage={error?.messages?.name || errors.name?.message}
					validation={{
						pattern:  { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "E - Mail is not correct!" },
						required: { value: true, message: "E - Mail is required" }
					}}/>
				<InputText<TSignInData>
					register={register}
					name="password"
					label="Passowrd"
					autoComplete="current-password"
					placeholder="Pass you password here..."
					type="password"
					error={error?.messages?.password || errors.password?.message}
					aria-required
					aria-invalid={!!(error?.messages?.name || errors.name?.message)}
					aria-errormessage={error?.messages?.name || errors.name?.message}
					validation={{
						minLength: { value: 12, message: "Password is to short!" },
						required:  { value: true, message: "Passowrd is required!" }
					}}/>
				{(error && error.code != 422) && <ErrorBox message={error.message}/>}
				<Link to="/forgot-password">Forgot password?</Link>
				<Button>Submit</Button>
			</Form>
		</div>
	);
};