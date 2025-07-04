import getFileExtention from "./get-file-extention.util";
import compress from "./compres.util";
import decompress from "./decompress.util";
import firstLetterToUpperCase from "./first-letter-to-upper-case.util";

import type { TString } from "./string.util.type";

const string: TString = {
  getFileExtention,
  firstLetterToUpperCase,
  compress,
  decompress,
}

export default string;