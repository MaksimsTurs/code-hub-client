export type TCodeHubProject = {
	_id: string
	name: string
	description: string
	visibility: TCodeHubProjectVisibility
	contributors: any[]
	stars: any[]
	createdAt: Date
	updatedAt: Date
};

export type TCodeHubProjectVisibility = "public" | "private" | "protected";