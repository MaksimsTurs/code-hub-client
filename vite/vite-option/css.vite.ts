import type { UserConfig } from "vite";

import os from "node:os";

export default (): UserConfig["css"] => {
  return {
    transformer: "postcss",
    preprocessorMaxWorkers: os.cpus().length
  };
};