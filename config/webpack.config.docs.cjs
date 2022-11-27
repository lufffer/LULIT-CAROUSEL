const TerserJSPlugin = require("terser-webpack-plugin");
const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
};

module.exports = {
  entry: {
    "docs/lulit-carousel": "./src/lulit-carousel.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["url-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({ extractComments: false })],
  },
  devtool: "source-map",
  devServer: {
    static: PATHS.dist,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
