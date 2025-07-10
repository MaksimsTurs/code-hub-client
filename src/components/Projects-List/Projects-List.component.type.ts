import type { TProject } from "@root/global.type";

export type TProjectsListProps = {
	projects: TProject[]
	showDataBoxOnHover?: boolean
};

export type TProjectDataBoxProps = {
	position: { x: number, y: number }
	project: TProject
};

export type TProjectProps = {
	index: number
	project: TProject
};