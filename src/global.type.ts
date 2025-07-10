import type { TCodeHubProjectVisibility } from "./reducers/use-code-hub/use-code-hub.slice.type";

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
	visibility: TCodeHubProjectVisibility
	createdAt: Date
	updatedAt: Date
	description: string
	owners: any[]
	stars: any[]
	contributors: any[]
};