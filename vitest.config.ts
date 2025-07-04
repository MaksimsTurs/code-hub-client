import { defineConfig } from "vitest/config"

import path from "path"

import testOption from "./vite/vite-option/test.vite"

import { APP_TYPE } from "./app.const"

function resolve(_path: string) {
  return path.resolve(__dirname, _path);
};

export default defineConfig(() => {
  return {
    test: testOption(resolve("tests-setup.ts")),
    appType: APP_TYPE,  
  };
});