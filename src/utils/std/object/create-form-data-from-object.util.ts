export default function createFormDataFromJSON(object: any): FormData {
  const formData: FormData = new FormData();

	for(let key in object) {
		const value: any = object[key];

		if(value instanceof FileList && value.length) {
			let index: number = 0;

			const length: number = value.length;

			while(index < length) {
				const file: File = value.item(index)!;

				formData.append(file.name, file);
				index++;
			}
		} else if(value && (value !== "undefined" && value !== "null") && value?.length) {
			formData.append(key, value);
		}
	}

  return formData;
};