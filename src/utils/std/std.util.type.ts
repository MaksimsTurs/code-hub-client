import type { TArray } from "./array/array.util.type";
import type { TNumber } from "./number/number.util.type";
import type { TObject } from "./object/object.util.type";
import type { TString } from "./string/string.util.type";

export type TStd = {
  array: TArray
  object: TObject
  string: TString
  number: TNumber
};