const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader"
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/i,
        include: path.resolve("src"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.bundle.css",
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
