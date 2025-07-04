import type { UserConfig } from "vite";

type ServerOptions = {
  open: boolean
  path: string
};

export default function(param: ServerOptions): UserConfig["server"] {
  return {
    open: param.open, 
    port: 3000,
    warmup: { clientFiles: [param.path] }
  };
};