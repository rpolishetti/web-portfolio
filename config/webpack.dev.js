const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

console.log("DIRECTORY****", path.resolve('src'));

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devServer: {
    //open: true,
    compress: true,
    //hot:true,
    port: 9000,
    historyApiFallback: true
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
          "style-loader",
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
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
