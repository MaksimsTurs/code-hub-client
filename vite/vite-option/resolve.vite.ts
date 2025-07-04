import type { UserConfig } from "vite";

export default function(path: string): UserConfig["resolve"] {
  return {
    extensions: [".ts", ".tsx"],
    alias: { "@": path },
  };
};