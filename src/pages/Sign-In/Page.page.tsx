import type { JSX } from "react";
import type { TSignInData } from "./Page.page.type";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from "@/components/Form/Form.component";
import InputText from "@/components/Inputs/Input-Text/Input-Text.component";
import Button from "@/components/Button/Button.component";

import std from "@/utils/std/std.util";

import useAuth from "@/hooks/use-auth/use-auth.hook";

export default function Page(): JSX.Element {
	const navigate = useNavigate();
	const { authentication } = useAuth();
	const { handleSubmit, register, reset, formState: { errors }} = useForm<TSignInData>()

	const signUp: SubmitHandler<TSignInData> = (data): void => {
		authentication("user/sign-in", std.object.createFormDataFromJSON(data));
		reset();
		navigate("/");
	};

	return(
		<div className="fr-n-c-n">
			<Form onSubmit={handleSubmit(signUp)}>
				<InputText<TSignInData>
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
				<InputText<TSignInData>
					register={register}
					name="email"
					placeholder="E - Mail"
					type="email"
					error={errors.email?.message}
					validation={{
						pattern:  { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "E - Mail is not correct!" },
						required: { value: true, message: "E - Mail is required" }
					}}/>
				<InputText<TSignInData>
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