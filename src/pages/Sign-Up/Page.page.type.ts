export type TSignUpData = {
	avatar: string
	name: string
	email: string
	password: string
};

export type TSignInServerError = {
	code: number,
	message: string
	messages: Partial<Record<keyof TSignUpData, string>>
};