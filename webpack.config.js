const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const mode = env.production ? "production" : "development";

  return {
    mode,
    entry: {
      bundle: "./src/index.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    devServer: {
      // watchFiles: ["./src/**/*.{html,js,csv,css}"],
      watchFiles: [path.join(__dirname, "src", "**", "*.{html,js,csv,css}")],
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        },
        {
          test: /\.(csv|tsv)$/i,
          use: [
            {
              loader: "csv-loader",
              options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      moduleIds: "deterministic",
    },
  };
};
