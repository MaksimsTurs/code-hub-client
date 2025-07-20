export type TAccountSettingPageParams = {
	accountId: string
};

export type TChangeAccountData = {
	name: string
};

export type TChangeAccountDataServerError = {
	code: number,
	message: string
	messages: Partial<Record<keyof TChangeAccountData, string>>
}