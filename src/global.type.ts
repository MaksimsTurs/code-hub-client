export type TJSPrimitiveTypes = string | number | boolean | undefined | null;

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
	owners: any[]
	stars: any[]
	contributors: any[]
};

export type TProjectVisibility = "public" | "private" | "protected";