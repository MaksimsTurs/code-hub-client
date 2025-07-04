import array from "./array/array.util";
import number from "./number/number.util";
import object from "./object/object.util";
import string from "./string/string.util";

import type { TStd } from "./std.util.type";

const std: TStd = {
  array,
  string,
	object,
  number,
};

export default std;