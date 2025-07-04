import { ETokenTypes } from "./Tokenizer.util.type";

class Token {
	public id: string = "";
	public value: string = "";
	public types: Set<ETokenTypes> = new Set<ETokenTypes>();

	constructor(value: string, type: Set<ETokenTypes>) {
		this.value = value;
		this.types = type;
		this.id = window.crypto.randomUUID();
	}
};

export default Token;