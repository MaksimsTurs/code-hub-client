import detectDuplicatedDeps from "unplugin-detect-duplicated-deps/vite"

export default function() {
  return detectDuplicatedDeps({ deep: true });
};