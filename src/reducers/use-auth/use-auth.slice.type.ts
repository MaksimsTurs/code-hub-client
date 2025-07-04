export type TUseAuthSliceState = {
	isLoading: boolean
	isPending: boolean
	accessToken?: string
};

export type TUseAuthAuthorizeParam = {
	url: string
	accesToken?: string
};

export type TUseAuthAuthenticateParam = {
	url: string
	body: FormData
};