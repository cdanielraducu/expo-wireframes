module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            src: "./src",
          },
        },
      ],
      "@babel/plugin-transform-runtime",
      "react-native-reanimated/plugin",
    ],
  };
};
