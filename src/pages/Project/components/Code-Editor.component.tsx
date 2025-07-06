import type { JSX, SyntheticEvent } from "react";

import selectors from "../scss/Code-Editor.module.scss"

import useCodeHub from "@hook/use-code-hub/use-code-hub.hook";

import { useState } from "react";

import Tokenizer from "@util/Languages-Parser/Tokenizer.util";
import Token from "@util/Languages-Parser/Token.util";
import { ETokenTypes } from "@util/Languages-Parser/Tokenizer.util.type";

export default function CodeEditor(): JSX.Element {
	const { selectedFile } = useCodeHub();
	const [state, setState] = useState<string>(selectedFile?.content || "");
	
	const inputText = (event: SyntheticEvent<HTMLTextAreaElement>): void => {
		setState(event.currentTarget.value);
	};
	
	const tokenizer = new Tokenizer({
		keywords: new Set([
			"function",
			"const",
			"var",
			"let",
			"return",
			"for",
			"in",
			"of",
			"while",
			"do",
			"if"
		]),
		rules: [
			{
				regexp: /([a-zA-Z_$][a-zA-Z0-9_$]*)/y, 
				id: ETokenTypes.SPECIFIC_IDENTIFIER,
				// @ts-ignore
				extendTokenTypes: function(token, tokens, text, index) {
					if(tokens.at(-2)?.value === "function") {
						return ["KEYWORD_FUNCTION"]
					}

					return [];
				}
			},
			{ 
				regexp: /(\`|\'|\")(.*)(\`|\'|\")/y,
				id: ETokenTypes.SPECIFIC_STRING_LITERAL
			},
			{
				regexp: /[0-9*]?.[0-9*]/y, 
				id: ETokenTypes.NUMBER_LITERAL,
			},
			{
				regexp: /\t+/y,
				id: ETokenTypes.PUNCTUATION_TAB
			},
			{
				regexp: /\r+/y,
				id: ETokenTypes.PUNCTUATION_NEW_LINE
			},
			{
				regexp: /\n+/y,
				id: ETokenTypes.PUNCTUATION_NEW_LINE
			},
			{ 
				regexp: /\s+/y,
				id: ETokenTypes.PUNCTUATION_WHITE_SPACE 
			},
			{ 
				regexp: /\{/y, 
				id: ETokenTypes.PUNCTUATION_LEFT_BRACES 
			},
			{ 
				regexp: /\}/y, 
				id: ETokenTypes.PUNCTUATION_RIGHT_BRACES 
			},
			{ 
				regexp: /\(/y, 
				id: ETokenTypes.PUNCTUATION_LEFT_ROUND_BRACKET 
			},
			{ 
				regexp: /\)/y, 
				id: ETokenTypes.PUNCTUATION_RIGHT_ROUND_BRACKET 
			},
			{ 
				regexp: /\,/y, 
				id: ETokenTypes.PUNCTUATION_COMMA 
			},
			{
				regexp: /\;/y,
				id: ETokenTypes.PUNCTUATION_SEMI_COLON
			},
			{ 
				regexp: /\./y, 
				id: ETokenTypes.PUNCTUATION_DOT 
			},
			{
				regexp: /\-/y,
				id: ETokenTypes.PUNCTUATION_MINUS
			},
			{
				regexp: /\*/y,
				id: ETokenTypes.PUNCTUATION_MUL
			},
			{
				regexp: /\//y,
				id: ETokenTypes.PUNCTUATION_DIV
			},
			{ 
				regexp: /\+/y, 
				id: ETokenTypes.PUNCTUATION_PLUS 
			},
			{ 
				regexp: /\<\=/y, 
				id: ETokenTypes.PUNCTUATION_SMALLER_OR_EQUAL_THEN 
			},
			{ 
				regexp: /\</y, 
				id: ETokenTypes.PUNCTUATION_SMALLER_THEN 
			},
			{ 
				regexp: /\>\=/y, 
				id: ETokenTypes.PUNCTUATION_BIGGER_OR_EQUAL_THEN 
			},
			{ 
				regexp: /\>/y, 
				id: ETokenTypes.PUNCTUATION_BIGGER_THEN 
			},
			{
				regexp: /(\=\>)/y,
				id: ETokenTypes.PUNCTUATION_ASSIGN
			},
			{ 
				regexp: /\={3}|\={2}/y, 
				id: ETokenTypes.PUNCTUATION_EQUAL
			},
			{
				regexp: /\=/y,
				id: ETokenTypes.PUNCTUATION_ASSIGN
			},
		]
	});

	console.time("TOKENIZE")
	
	const tokens = tokenizer.tokenize(
	`
		"use strict";

		const func = () => {
			return 1;
		}

		function $func30$func(one, two) {
			const sum = one + two;

			if(one > two) {
				return one;
			}

			if(one < two) {
				return two;
			}

			if(one == two) {
				console.log("Both are equal %i + %i", one + two);
			}

			if(one === two) {
				console.log("Both are strict equal %i + %i", one + two);
			}
		};
	`
	);

	console.timeEnd("TOKENIZE")

	console.log(tokens)

	const createDOMNode = (token: Token): JSX.Element => {
		return <p className={getClassName(token.types)}>{token.value}</p>
	}

	return(
		<label className={selectors.code_editor_container}>
			<textarea onChange={inputText} value={state}/>
			<div>{createDOMTree(tokens, createDOMNode)}</div>
		</label>
	);
};

function getClassName(types: Set<ETokenTypes>): string {
	return [...types].join(" ").toLowerCase();
}

function createDOMTree(tokens: Token[][], createDOMNode: (token: Token) => JSX.Element): JSX.Element[] {
	const DOMTree: JSX.Element[] = [];
	const tokensLength: number = tokens.length;

	let tokensIndex: number = 0;

	while(tokensIndex < tokensLength) {
		const lineLength: number = tokens[tokensIndex].length;
		const DOMNodes: JSX.Element[] = [];

		let lineIndex = 0;

		while(lineIndex < lineLength) {
			const DOMNode: JSX.Element = createDOMNode(tokens[tokensIndex][lineIndex]);

			DOMNodes.push(DOMNode);

			lineIndex++;
		}

		DOMTree.push(<pre className="line">{DOMNodes}</pre>);

		tokensIndex++;
	}

	return DOMTree;
}