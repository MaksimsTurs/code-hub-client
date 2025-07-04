import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";

import os from "node:os";

export default function() {
  return vitePluginBundleObfuscator({
    enable: true,
    log: false,
    autoExcludeNodeModules: true,
    threadPool: {
      enable: true,
      size: os.cpus().length
    },
    options: {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      deadCodeInjection: false,
      debugProtection: false,
      debugProtectionInterval: 0,
      disableConsoleOutput: false,
      identifierNamesGenerator: "hexadecimal",
      stringArrayWrappersType: "variable",
      log: false,
      numbersToExpressions: false,
      renameGlobals: false,
      selfDefending: true,
      simplify: true,
      splitStrings: false,
      stringArray: false,
      stringArrayCallsTransform: false,
      stringArrayCallsTransformThreshold: 0.5,
      stringArrayEncoding: [],
      stringArrayIndexShift: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 2,
      stringArrayThreshold: 0.75,
      unicodeEscapeSequence: false
    }
  });
};