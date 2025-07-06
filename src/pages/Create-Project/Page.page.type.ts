import type { TCodeHubProject } from "@reducer/use-code-hub/use-code-hub.slice.type";

export type TCreateProjectServerError = {
	code: number,
	message: string
	messages: Partial<Record<keyof TCodeHubProject, string>>
};