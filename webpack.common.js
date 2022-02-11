const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const BUNDLERS_PATH = "./static/js/bundlers/";

module.exports = {
  mode: "development",
  entry: {
    ms: BUNDLERS_PATH + "ms.mjs",
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "static"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle" + ".css",
    }),
  ],
  //loaders
  module: {
    //css
    rules: [
      //js for babel
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //css loader
      {
        test: /\.(sa|sc|c)ss$/,
        // Set loaders to transform files.
        // Applied last-to-first
        use: [
          // All transformed CSS to single bundled file
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Resolves url() and @imports inside CSS. Also, required for MiniCssExtractPlugin
          {
            loader: "css-loader",
          },
          // autoprefixer and minifying
          {
            loader: "postcss-loader",
          },
          // SASS -> CSS (run first)
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
