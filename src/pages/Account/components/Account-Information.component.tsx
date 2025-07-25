import type { JSX } from "react";
import type { TAccountPageParams, TAccountInformationProps, TNewAccessToken } from "../Page.page.type";
import type { TFormatedError } from "@root/global.type";

import { useNavigate, useParams } from "react-router-dom";

import selectors from "../scss/Account-Information.module.scss";

import useAuth, { useWithAuth } from "@hook/use-auth/use-auth.hook";
import useConfirm from "@hook/use-confirm/use-confirm.hook";

import Button from "@component/Button/Button.component";
import ErrorBox from "@component/Errors/Error-Box/Error-Box.component";

import { IconUserCircle, IconSetting, IconTrash2, IconLogOut } from "@component/Icons/SVG-Icons.component";

import std from "@util/std/std.util";

export default function AccountInformation(props: TAccountInformationProps): JSX.Element {
	const { signOut, deleteAccountData, error: authError } = useAuth<unknown, Error>();
	const { withAuth, error: withAuthError } = useWithAuth<unknown, TFormatedError>();
	const { confirm } = useConfirm();

	const redirect = useNavigate();
	const params = useParams<TAccountPageParams>();

	const logOut = async (): Promise<void> => {
		const isSignOuted: boolean = await signOut("account/sign-out");

		if(isSignOuted) {
			redirect("/");
		}
	};

	const changeAccountData = (): void => {
		redirect(`/account/${params.accountId}/setting`);
	};

	const deleteAccount = async (): Promise<void> => {
		const isConfirmed: boolean = await confirm<boolean>({ text: "Are you really going to delete your account?", title: "Delete Account?" });

		if(!isConfirmed) {
			return;
		}

		try {
			const response = await withAuth<unknown, TNewAccessToken>({
				state: true,
				refresh: {
					url: "account/refresh-access-token",
					extract: (response) => response.data!.accessToken!
				},
				fetch: {
					method: "delete",
					url: `account/delete/${params.accountId}`,
				},
				formatError: function(error) {
					if(std.object.inObject(["code", "message"], error)) {
						// @ts-ignore
						return { code: error.code, message: error.message, type: "SERVER" };
					}

					if(error instanceof Error) {
						return { message: "Something goes wrong!", type: "CLIENT" };
					}
	
					return { message: "Unknown error!", type: "CLIENT" };
				}
			});

			if(!response.error) {
				deleteAccountData();
				redirect("/");
			}
		} finally {}
	};

	return(
		<section className={`fc-n-n-xs ${selectors.account_information_container}`}>
			<div className={selectors.account_information_body}>
				<div className="fc-n-n-xs">
					<div className={`fc-c-c-xs ${selectors.account_data_container}`}>
						<IconUserCircle width={120} height={120}/>
						<div>
							<h2>{props.account.name}</h2>
							<p className={selectors.account_id}>{props.account._id}</p>
						</div>
					</div>
				</div>
				<div className="fr-n-n-xs">
					<Button 
						className={selectors.account_action_button}
						onClick={deleteAccount}>
						<IconTrash2 width={24} height={24}/>
					</Button>
					<Button 
						className={selectors.account_action_button}
						onClick={logOut}>
						<IconLogOut width={24} height={24}/>
					</Button>
					<Button 
						className={selectors.account_action_button}
						onClick={changeAccountData}>
						<IconSetting width={24} height={24}/>
					</Button>
				</div>
			</div>
			{(authError || withAuthError) ? <ErrorBox message={(authError || withAuthError)!.message}/> : null}
		</section>
	);
};