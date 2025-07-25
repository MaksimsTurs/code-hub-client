export type TJSPrimitiveTypes = string | number | boolean | undefined | null;

// This is type of errors that whe become from the server as response.
export type TAPIRequestError = {
	code: number
	message: string
};

// This is type of errors that whe use to render to the client.
export type TFormatedError = {
	type: TFormatedErrorTypes
	code?: number
	message: string
};

export type TFormatedErrorTypes = "CLIENT" | "SERVER";

export type TAccount = {
	_id: string
	name: string
	avatar: string
	email: string
	projects: TProject[]
};

export type TProject = {
	_id: string
	name: string
	visibility: TProjectVisibility
	createdAt: Date
	updatedAt: Date
	description: string
	owner: TAccount
	stars: any[]
	contributors: any[]
};

export type TProjectVisibility = "public" | "private" | "protected";