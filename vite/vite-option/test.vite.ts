import { UserConfig } from "vitest/config";

export default function(setupPath: string): UserConfig["test"] {
  return {
    globals: true, 
    environment: "jsdom",
    setupFiles: setupPath,
    include: ["**/*.{test}.?[t]s?(x)"],
    exclude: [
      "**/node_modules/**", 
      "**/output/**", 
      "**/.{idea,git,cache,output,temp}/**", 
      "**/{vite,vitest}.config.*"
    ]
  };
};