import viteWebFont from "vite-plugin-webfont-dl";

export default function(fonts: string[]) {
  return viteWebFont(fonts, { injectAsStyleTag: true,  embedFonts: false });
};