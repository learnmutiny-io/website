const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    "firebase-admin": "commonjs firebase-admin",
  },
  node: {
    __dirname: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.FIREBASE_CONFIG": JSON.stringify({
        databaseURL: "https://learnmutiny-60952-default-rtdb.firebaseio.com/",
        projectId: "learnmutiny-60952",
      }),
    }),
  ],
  target: "node",
  mode: "production",
};
