import type { UserConfig, AliasOptions } from "vite";

export default function(alias: AliasOptions): UserConfig["resolve"] {
  return { extensions: [".ts", ".tsx"], alias };
};