import type { PropsWithChildren } from "react";
import type { TUseAuthSignInBody } from "@root/reducers/use-auth/use-auth.slice.type";

export type TUseAuthOptions<E> = {
	formatError?: TUseAuthFormatError<E> 
};

export type TUseAuthReturn<A, E = unknown> = {
	isPending: boolean
	isLoading: boolean
	isAuth: boolean
	error?: E
	account?: A
	signIn: TUseAuthSignInSignUp
	signOut: TUseAutSignOut
	auth: TUseAuthAuth
	deleteAccountData: TUseAuthDeleteAccountData
};

export type TUseAuthFormatError<E = any> = (error: unknown) => E;

export type TUseAuthDeleteAccountData = () => void;

export type TUseAuthIsActionSuccess = Promise<boolean>;

export type TUseAuthAuth = (url: string) => void;

export type TUseAuthSignInSignUp = (url: string, body: TUseAuthSignInBody) => TUseAuthIsActionSuccess;

export type TUseAutSignOut = (url: string) => TUseAuthIsActionSuccess;

export type TUseAuthLocalState<E> = {
	error?: E
};

export type TProtectCondition = boolean | Promise<boolean>;

export type TProtectRouteProps = PropsWithChildren<{
	or?: TProtectCondition[]
	and?: TProtectCondition[]
	redirectUrl: string
}>;