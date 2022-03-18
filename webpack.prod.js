const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/",
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        FRONT_URL: JSON.stringify(process.env.FRONT_URL),
      },
    }),
  ],
});
