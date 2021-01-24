const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // js에서 file load 가능
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      title: "Jeong-SeongHoon potfolio",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
