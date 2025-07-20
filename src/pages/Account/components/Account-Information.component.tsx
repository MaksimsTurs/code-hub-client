import type { JSX } from "react";
import type { TAccountPageParams, TAccountInformationProps } from "../Page.page.type";
import type { TFetcherServerError } from "@util/fetcher/fetcher.util.type";

import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";

import selectors from "../scss/Account-Information.module.scss";

import useAuth, { useWithAuth } from "@hook/use-auth/use-auth.hook";
import useConfirm from "@hook/use-confirm/use-confirm.hook";

import Button from "@component/Button/Button.component";
import ErrorBox from "@component/Errors/Error-Box/Error-Box.component";

import { IconUserCircle, IconSetting, IconTrash2, IconLogOut } from "@component/Icons/SVG-Icons.component";

import std from "@util/std/std.util";

// TODO: Action loader.

export default function PersonalInformation(props: TAccountInformationProps): JSX.Element {
	const { signOut, deleteAccountData } = useAuth<unknown, Error>();
	const { error, withAuth } = useWithAuth<unknown, TFetcherServerError>();
	const { confirm } = useConfirm();

	const redirect = useNavigate();
	const params = useParams<TAccountPageParams>();

	const logOut = async (): Promise<void> => {
		if(await signOut("account/sign-out")) {
			redirect("/");
		}
	};

	const changeAccountData = (): void => {
		redirect(`/account/${params.accountId}/setting`);
	}

	const deleteAccount = async (): Promise<void> => {
		const isConfirmed = await confirm({ text: "Are you really going to delete your account?", title: "Delete Account?" });

		if(!isConfirmed) {
			return
		}

		try {
			await withAuth<any, { accessToken: string }>({
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
					if(error instanceof Error) {
						return { code: 0, message: "Something goes wrong!" };
					}
	
					if(std.object.inObject(["code", "message"], error)) {
						// @ts-ignore
						return { code: error.code, message: error.message };
					}
					
					return { code: 0, message: "Unknown error!" };
				}
			});
		} finally {
			deleteAccountData();
			redirect("/");
		}
	};

	return(
		<Fragment>
			<section className="fc-n-n-xs">
				<div className={selectors.personal_information_container}>
					<div className="fc-n-n-xs">
						<div className="fr-c-c-n">
							<IconUserCircle width={120} height={120}/>
						</div>
						<div>
							<h2>{props.account.name}</h2>
							<p>{props.account.email}</p>
						</div>
					</div>
				</div>
				<div className="fr-n-n-xs">
					<Button onClick={deleteAccount} className={selectors.personal_information_action_button}>
						<IconTrash2 width={24} height={24}/>
					</Button>
					<Button onClick={logOut} className={selectors.personal_information_action_button}>
						<IconLogOut width={24} height={24}/>
					</Button>
					<Button onClick={changeAccountData} className={selectors.personal_information_action_button}>
						<IconSetting width={24} height={24}/>
					</Button>
				</div>
				{error ? <ErrorBox message={error.message}/> : null}
			</section>
		</Fragment>
	);
};