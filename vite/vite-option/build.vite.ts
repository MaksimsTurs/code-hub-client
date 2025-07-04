import type { UserConfig } from "vite"

type BuildOptions = {
	isDev: boolean
	outDir: string
	input: string
};

export default function(param: BuildOptions): UserConfig["build"] {
	return {
		target: "esnext",
		minify: param.isDev ? "esbuild" : "terser",
		cssMinify: param.isDev ? false : "esbuild",
		sourcemap: !param.isDev,
		outDir: param.outDir,
		emptyOutDir: true,
		chunkSizeWarningLimit: 200,
		reportCompressedSize: false,
		terserOptions: param.isDev ? undefined : {
			ecma: 2020,
			compress: {
				arguments: true,
				drop_console: true,
				drop_debugger: true,
				expression: true,
			},
		},
		rollupOptions: {
			input: param.input,
			output: {
				assetFileNames: (asset: any) => {
					let [fileName, fileExtention] = asset.name.split(".");

					if(/(jpeg|jpg|png|webp|gif)/.test(fileExtention))  fileExtention = "img";
					if(/(woff|woff2|ttf)/.test(fileExtention)) 				 fileExtention = "fonts";
					if(/css/.test(fileExtention))              				 fileExtention = "css";
					if(/js/.test(fileExtention))                       fileExtention = "js";
									
					return `assets/${fileExtention}/${fileName.replace(/js\//, "")}[extname]`;
				},
				manualChunks: (path) => {
					let splitedPath: string[] = [];
					let fileName: string = "";

					if(/Page\.component\.tsx/.test(path)) {
						splitedPath = path.split(/\//);
						fileName = splitedPath[splitedPath.length - 2];
						return `js/pages/${fileName}`;
					}

					if(/src\/component/.test(path)) {
						return "js/components";
					}

					if(/src\/hook/.test(path)) {
						return "js/hooks";
					}

					if(/src\/lib/.test(path)) {
						return "js/lib";
					}		

					if(/src\/util/.test(path)) {
						return "js/util";
					}

					if(/node_modules\/react.*/.test(path) || /sheduler.*/.test(path)) {
						return "js/react-vendor";
					}
				}
			}
		}
	};
};