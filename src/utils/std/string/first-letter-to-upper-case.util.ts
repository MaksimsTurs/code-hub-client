export default function firstLetterToUpperCase(words?: string | string[] | null): string | string[] | null | undefined {
	if(!words) {
		return words;
	}

  if(Array.isArray(words)) {
    return processWords(words);
  }

	if(words) {
		return processWord(words);
	}
};

function processWord(word: string): string  {
	return `${word[0].toUpperCase()}${word.substring(1, word.length)}`;
};

function processWords(words: string[]): string[] {
  let processedWords: string[] = [];
  let index: number = 0;

	const length: number = words.length;

  while(index < length) {
		processedWords.push(processWord(words[index]) as string);

    index++;
  }

	return processedWords;
};