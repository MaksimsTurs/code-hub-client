import type { TFileExplorerItem } from "@/hooks/use-code-hub/use-code-hub.hook.type";

export type TFileExplorer = {
	items: TFileExplorerItem[]
};

export type TFileExplorerFolder = {
	item: TFileExplorerItem
};

export type TFileExplorerFileProps = {
	item: TFileExplorerItem
};