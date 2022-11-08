const path = require("path");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    testportal: "./src/testportal/index.ts",
    pazdro: "./src/pazdro/index.ts",
    installing: "./src/installing/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
  },
  plugins: [
    new copyPlugin({
      patterns: [{ from: "./public", to: "../" }],
    }),
  ],
};
