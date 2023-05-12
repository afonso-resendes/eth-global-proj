// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = getDefaultConfig(__dirname);

module.exports = {
  watchFolders: [
    // ...
  ],
  transformer: {
    getTransformOptions: async () => ({
      // ...
    }),
  },
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "json"],
    useWatchman: false, // disable Watchman
  },
};
