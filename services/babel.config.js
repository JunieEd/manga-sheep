module.exports = {
  presets: ["@babel/env"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./src"
        }
      }
    ],
    "@babel/plugin-transform-runtime"
  ]
};
