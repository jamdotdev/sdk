const path = require("path");

const env = process.env.NODE_ENV || "development";

module.exports = {
  mode: env,
  devtool: "source-map",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    iife: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    library: {
      name: "sdk",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: "web",
  plugins: [],
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: false,
        },
      },
    ],
  },
  optimization: {
    mangleExports: false,
    minimize: false,
  },
};
