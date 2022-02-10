const path = require("path");
const BUNDLERS_PATH = "./static/js/bundlers/";

module.exports = {
  mode: "development",
  entry: {
    ms: BUNDLERS_PATH + "ms.mjs",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  //loaders
  module: {
    //css
    rules: [
      //css loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

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
    ],
  },
  //plugins
};
