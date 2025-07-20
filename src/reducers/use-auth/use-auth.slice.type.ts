export type TUseAuthSliceState = {
	isPending: boolean
	isLoading: boolean
	isAuth: boolean
	accessToken?: string | null
	account?: unknown | null
	error?: unknown | null
};

export type TUseAuthSignInBody = FormData | object;

// Should be request URL.
export type TUseAuthAuthActionParam = string

export type TUseAuthAuthActionReturn = {
	accessToken: string
	account: unknown
};

//=======================================================
//=======================================================
//=======================================================

export type TUseAuthSignInActionParam = {
	url: string
	body: TUseAuthSignInBody
};

export type TUseAuthSignInActionReturn = {
	accessToken: string
	account: unknown
};

//=======================================================
//=======================================================
//=======================================================

// Should be request URL.
export type TUseAuthSignOutActionParam = string;

export type TUseAuthSignOutActionReturn = void;