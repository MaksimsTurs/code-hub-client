export type TObject = {
  inObject: <O>(keys?: (keyof O)[] | null, object?: any | null) => boolean
  createFormDataFromJSON: (object: any) => FormData
};