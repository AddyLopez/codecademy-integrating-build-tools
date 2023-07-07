const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./code/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
    ],
  },
};
