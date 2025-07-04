export type TString = {
	getFileExtention: (str?: string | null) => string | null | undefined
  firstLetterToUpperCase: (str?: string | string[] | null) => string | string[] | null | undefined
  compress: (str?: string | null) => string | null | undefined
  decompress: (str?: string | null) => string | null | undefined
};