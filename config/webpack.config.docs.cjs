const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  public: path.join(__dirname, "../public"),
};

module.exports = {
  entry: {
    docs: path.join(__dirname, "../src", "lulit-carousel.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../docs"),
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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["url-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.public, "index.html"),
      chunks: ["docs"],
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(PATHS.src, "imgs"), to: "./imgs" },
        {
          from: path.join(PATHS.public, "assets", "css", "styles.css"),
          to: path.join("public", "assets", "css", "styles.css"),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserJSPlugin({})],
  },
  devtool: "source-map",
  devServer: {
    static: PATHS.dist,
  },
  resolve: {
    extensions: [".css", ".js", ".ts"],
  },
};
