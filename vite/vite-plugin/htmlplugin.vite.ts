import { createHtmlPlugin } from "vite-plugin-html";

export default function() {
  return createHtmlPlugin({ minify: true });
};