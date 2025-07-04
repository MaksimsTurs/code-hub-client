export type TCodeHubProject = {

};

export type TFileExplorerItem = {
	id: string
	name: string
	type: TFileExplorerItemTypes
	content?: string
	items?: TFileExplorerItem[]
};

export type TFileExplorerFile = {
	content: string
	type: "file"
} & TFileExplorerItem;

export type TFileExplorerFolder = {
	items: TFileExplorerItem[]
	type: "folder"
};

export type TFileExplorerItemTypes = "file" | "folder";

export type TUseCodeHubState = {
	selectedFile?: TFileExplorerFile
};