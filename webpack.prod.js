const path = require("path");
const BUNDLERS_PATH = "./static/js/bundlers/";

module.exports = {
  mode: "production",
  entry: BUNDLERS_PATH + "ms.mjs",
  output: {
    filename: "js/ms.bundle.min.js",
    path: path.resolve(__dirname, "static"),
  },
};
