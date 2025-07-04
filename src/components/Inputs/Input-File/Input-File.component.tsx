import type { JSX, SyntheticEvent } from "react";
import type { TInputFileProps, TUploadedFile } from "./Input-File.component.type";
import type { TExtendFieldValues } from "../Inputs.component.type";

import { useState, Fragment } from "react";

import { IconImage } from "@/components/Icons/SVG-Icons.component";

import selectors from "./Input-File.module.scss";

export default function FileInput<T>({ label, register, validation, ...otherProps }: TInputFileProps<TExtendFieldValues<T>>): JSX.Element {
	const [uploadedFiles, setUploadedFiles] = useState<TUploadedFile | undefined>();

	const onChange = (event: SyntheticEvent<HTMLInputElement>): void => {
		const file: File = event.currentTarget.files![0];
		const extention: string = file.type.replace(/.*\/(.*)/, "$1").trim();
		const type: string = file.type.replace(/(.*)\/.*/, "$1");

		setUploadedFiles({ name: file.name, size: file.size, extention, type, src: URL.createObjectURL(file) });
	};

	return(
		<label className={`fr-c-c-m ${selectors.file_input_container}`}>
			{!uploadedFiles ?
			<Fragment>
				<IconImage/>
				<p>{label}</p>
			</Fragment> :
			<div className={selectors.file_input_upload_container}>
				{uploadedFiles.type === "image" ? 
					<img draggable={false} src={uploadedFiles.src}/> : 
					<video src={uploadedFiles.src}/>}
			</div>}
			<input type="file" {...otherProps } {...register(otherProps.name, { onChange, ...validation }) }/>
		</label>
	);
};