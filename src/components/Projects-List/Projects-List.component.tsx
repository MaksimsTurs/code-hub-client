import type { JSX, MouseEvent } from "react";
import type { TProjectsListProps } from "./Projects-List.component.type";
import type { TProject } from "@root/global.type";

import { useRef, useState, useEffect } from "react";

import ProjectDataBox from "./Project-Data-Box.component";
import ProjectListItem from "./Project-List-Item.component";
import Empty from "../Empty/Empty.component";

import selectors from "./Project-List.module.scss";

export default function ProjectsList(props: TProjectsListProps): JSX.Element {	
	const [infoBoxPos, setInfoBoxPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

	const listRef = useRef<HTMLUListElement>(null);
	const listRectRef = useRef<DOMRect>(null);
	const infoBoxDataRef = useRef<TProject | null>(null);

	const showMoreProjectInformation = (event: MouseEvent<HTMLUListElement>): void => {
		const { clientX, clientY } = event;

		setInfoBoxPos({ 
			x: listRectRef.current!.right - clientX,
			y: clientY + 30
		});

		infoBoxDataRef.current = props.projects[Number((event.target as HTMLLIElement).dataset.index)];
	};

	const hiddeInfoBox = (): void => {
		setInfoBoxPos({ x: 0, y: 0 });
		infoBoxDataRef.current = null;
	};

	useEffect(() => {
		// TODO: Do this better.
		const mainContinaer: HTMLDivElement = document.querySelector(".app_body")!;
		
		const changeListRectRef = (): void => {
			listRectRef.current = listRef.current!.getBoundingClientRect();
		}

		if(listRef.current) {
			listRectRef.current = listRef.current.getBoundingClientRect();
		}

		mainContinaer.addEventListener("scroll", changeListRectRef);

		return() => {
			mainContinaer.removeEventListener("scroll", changeListRectRef);
		};
	}, []);

	const options = props.showDataBoxOnHover ? {
		onMouseMove: showMoreProjectInformation,
		onMouseLeave: hiddeInfoBox
	} : {};

	return(
		<ul
			ref={listRef}
			{...options}
			className={selectors.projects_list}>
			{infoBoxDataRef.current && <ProjectDataBox position={infoBoxPos} project={infoBoxDataRef.current}/>}
			{props.projects.length ? props.projects.map((project, index) => <ProjectListItem key={project._id} project={project} index={index}/>) : <Empty label="Nothing was founded!"/>}
		</ul>
	);
};