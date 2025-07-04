import type { TTokenizerConfig, TTokenRule } from "./Tokenizer.util.type";

import { ETokenTypes } from "./Tokenizer.util.type";

import Token from "./Token.util";

class Tokenizer {
	private tokens: Token[][] = [[]];

	private cursor: number = 0;
	private text: string = "";
	
	private config: TTokenizerConfig = { rules: [], keywords: new Set() };

	private textLength: number = 0;
	private rulesLength: number = 0;

	constructor(config: TTokenizerConfig) {
		this.config = config
		this.cursor = 0;
		this.rulesLength = config.rules.length;
	}
	
	tokenize(text: string): Token[][] {
		this.text = text;
		this.textLength = text.length;

		while(!this.isEOT()) {
			let rulesIndex: number = 0;

			while(rulesIndex < this.rulesLength) {
				const rule: TTokenRule = this.config.rules[rulesIndex];

				rule.regexp!.lastIndex = this.cursor;

				const data = rule.regexp?.exec(this.text);
				
				if(data) {
					const token: Token = new Token(data[0], new Set<ETokenTypes>([this.isKeyWord(data[0]) ? ETokenTypes.SPECIFIC_KEYWORD : rule.id, ...(rule.types || [])]));

					if(rule.extendTokenTypes) {
						addToSet<ETokenTypes>((rule.extendTokenTypes?.(token, this.tokens.at(-1) || [], this.text, this.cursor) || []), token.types);
					}

					if(rule.id === ETokenTypes.PUNCTUATION_NEW_LINE) {
						this.tokens.at(-1)?.push(token);
						this.tokens.push([]);
					} else {
						this.tokens.at(-1)!.push(token);
					}

					this.cursor = rule.regexp!.lastIndex;
					break;
				}

				rulesIndex++;
			}

			if(rulesIndex >= this.rulesLength) {
				break;
			}
		}
		
		return this.tokens;
	}

	private isKeyWord(value: string): boolean {
		return this.config.keywords.has(value);
	}

	private isEOT() {
		return this.cursor >= this.textLength;
	}
};

function addToSet<T>(array: T[], set: Set<T>): void {
	let index = 0;

	const length = array.length;

	while(index < length) {
		set.add(array[index]);

		index++;
	}
}

export default Tokenizer;