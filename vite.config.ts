import { defineConfig as viteConfig } from "vite";

import path from "node:path";

import buildOption from "./vite/vite-option/build.vite";
import resolveOption from "./vite/vite-option/resolve.vite";
import serverOption from "./vite/vite-option/server.vite";
import cssOption from "./vite/vite-option/css.vite";

import optimizecssmoduleVite from "./vite/vite-plugin/optimizecssmodule.vite";
import duplicatescriptVite from "./vite/vite-plugin/duplicatescript.vite";
import htmlpluginVite from "./vite/vite-plugin/htmlplugin.vite";
// import imageminVite from "./vite/vite-plugin/imagemin.vite";
import reactSWCVite from "./vite/vite-plugin/reactswc.vite";
import webfontVite from "./vite/vite-plugin/webfont.vite";
// import viteObfuscation from "./vite/vite-plugin/obfuscation.vite";

import { APP_TYPE, ASSETS_INCLUDE_EXTENSTIONS } from "./app.const";

function resolve(_path: string): string {
	return path.resolve(__dirname, _path);
};

export default viteConfig(({ mode }) => {
	const isDev: boolean = mode === "development" ? true : false

	const DEV_PLUGINS = [
		webfontVite(["https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap"]),
		reactSWCVite()
	];

	const PROD_PLUGINS = [
		webfontVite(["https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap"]),
		reactSWCVite(),
		// imageminVite(),
		htmlpluginVite(),
		duplicatescriptVite(),
		optimizecssmoduleVite(),
		// viteObfuscation()
	];

	return {
		resolve: resolveOption({
			"@root":      resolve("src"),
			"@component": resolve("src/components"),
			"@hook":      resolve("src/hooks"),
			"@page":      resolve("src/pages"),
			"@reducer":   resolve("src/reducers"),
			"@scss":      resolve("src/scss"),
			"@util":      resolve("src/utils")
		}),
		css: cssOption(),
		server: serverOption({ open: false, path: resolve("src/**/*.*") }),
		build: buildOption({ isDev, outDir: resolve("output"), input: resolve("src/index.html") }),
		publicDir: resolve("public"),
		root: resolve("src"),
		appType: APP_TYPE,
		assetsInclude: ASSETS_INCLUDE_EXTENSTIONS,
		plugins: isDev ? DEV_PLUGINS : PROD_PLUGINS
	};
});