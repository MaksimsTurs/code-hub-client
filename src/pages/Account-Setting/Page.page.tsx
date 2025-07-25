import type { JSX } from "react";
import type { TAccount } from "@root/global.type";
import type { TAccountSettingPageParams, TChangeAccountData, TChangeAccountDataServerError } from "./Page.page.type";

import useFetch from "@hook/use-fetch/use-fetch.hook";
import useWithAuth from "@hook/use-auth/use-with-auth.hook";
import useMutate from "@hook/use-fetch/use-mutate.hook";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { 
	AnchorTagLayout,
	AnchorTagBody,
	AnchorTagContainer,
	AnchorTag,
	AnchorTagSideMenu
} from "@component/Anchor/Anchor.component";
import { Form } from "@component/Form/Form.component";
import InputText from "@component/Inputs/Input-Text/Input-Text.component";
import Button from "@component/Button/Button.component";

import std from "@util/std/std.util";

export default function Page(): JSX.Element {
	const params = useParams<TAccountSettingPageParams>();
	const { setNamedStateError } = useFetch();
	const { handleSubmit, register, formState: { errors }} = useForm<TChangeAccountData>();
	const { withAuth } = useWithAuth<unknown, TChangeAccountDataServerError>();
	const { error, mutate } = useMutate<TAccount, TChangeAccountData, TAccount>(`account/${params.accountId}`, async function(body, currState) {
		const response = await withAuth<TAccount, { accessToken: string }>({
			fetch: {
				method: "post",
				url: `account/change/${params.accountId}`,
				body: std.object.createFormDataFromJSON(body)
			},
			refresh: {
				url: "account/refresh-access-token",
				extract: (response) => response.data!.accessToken
			}
		});

		if(!response.error && response.data) {
			return response.data;
		}

		setNamedStateError(`account/${params.accountId}`, response.error);

		return currState;
	});

	const changeAccountData = async (data: TChangeAccountData): Promise<void> => {
		mutate(data);
	};

	return(
		<main>
			<AnchorTagLayout>
				<AnchorTagContainer>
					<AnchorTagBody hash="personal-information" title="Personal Information">
						<Form id="change-account" isChild onSubmit={handleSubmit(changeAccountData)}>
							<InputText
								register={register}
								label="You new Account name"
								name="name"
								placeholder="Pass you'r name here..."
								type="text"
								spellCheck={false}
								error={(error as TChangeAccountDataServerError)?.messages?.name || errors.name?.message}
								aria-required
								aria-invalid={!!((error as TChangeAccountDataServerError)?.messages?.name || errors.name?.message)}
								aria-errormessage={(error as TChangeAccountDataServerError)?.messages?.name || errors.name?.message}
								validation={{
									pattern:   { value: /[A-Za-z0-9_-]/, message: "Name is not correct!" },
									maxLength: { value: 20, message: "Name is to long!" },
									required:  { value: true, message: "Name is required!" }
								}}/>
						</Form>
					</AnchorTagBody>
					<div className="fr-n-fe-n">
						<Button form="change-account">Save</Button>
					</div>
					<AnchorTagBody hash="accessability" title="Accessability">
						
					</AnchorTagBody>
					<AnchorTagBody hash="design" title="Design">
						
					</AnchorTagBody>
				</AnchorTagContainer>
				<AnchorTagSideMenu>
					<AnchorTag hash="personal-information">Personal Information</AnchorTag>
					<AnchorTag hash="accessability">Accessability</AnchorTag>
					<AnchorTag hash="design">Design</AnchorTag>
				</AnchorTagSideMenu>
			</AnchorTagLayout>
		</main>
	);
};