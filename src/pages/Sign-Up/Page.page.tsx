import type { JSX } from "react";
import type { TSignUpData } from "./Page.page.type";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from "@component/Form/Form.component";
import InputFile from "@component/Inputs/Input-File/Input-File.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import Button from "@component/Button/Button.component";

import std from "@util/std/std.util";

import useAuth from "@hook/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const navigate = useNavigate();
	const { authentication } = useAuth();
	const { handleSubmit, register, reset, formState: { errors }} = useForm<TSignUpData>()

	const signUp: SubmitHandler<TSignUpData> = (data): void => {
		authentication("user/sign-up", std.object.createFormDataFromJSON(data));
		reset();
		navigate("/");
	};

	return(
		<div className="fr-n-c-n">
			<Form onSubmit={handleSubmit(signUp)}>
				<div className="fr-n-c-n">
					<InputFile<TSignUpData>
						name="avatar"
						label="Avatar"
						register={register}/>
				</div>
				<InputText<TSignUpData>
					register={register}
					name="name"
					placeholder="Name"
					type="text"
					error={errors.name?.message}
					validation={{
						pattern:   { value: /[A-Za-z0-9_-]/, message: "Name is not correct!" },
						maxLength: { value: 20, message: "Name is to long!" },
						required:  { value: true, message: "Name is required!" }
					}}/>
				<InputText<TSignUpData>
					register={register}
					name="email"
					placeholder="E - Mail"
					type="email"
					error={errors.email?.message}
					validation={{
						pattern:  { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "E - Mail is not correct!" },
						required: { value: true, message: "E - Mail is required" }
					}}/>
				<InputText<TSignUpData>
					register={register}
					name="password"
					placeholder="Password"
					type="password"
					error={errors.password?.message}
					validation={{
						minLength: { value: 12, message: "Password is to short!" },
						required:  { value: true, message: "Passowrd is required!" }
					}}/>
				<Button>Sign Up</Button>
			</Form>
		</div>
	);
};