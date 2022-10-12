module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@components": "./app/components",
            "@contexts": "./app/contexts",
            "@assets": "./app/assets",
            "@services": "./app/services",
          },
        },
      ],
      "nativewind/babel",
      ["module:react-native-dotenv"],
      "react-native-reanimated/plugin",
    ],
  };
};
