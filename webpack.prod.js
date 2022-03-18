const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/",
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env": {
        FRONT_URL: JSON.stringify(process.env.FRONT_URL),
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL)
      },
    }),
  ],
});
