const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, {mode}) => {
  return {
    "optimization":{"minimize": mode === 'development'? false:true},
    "devtool": (mode === 'development'? 'inline-source-map':false),
    "entry": path.join(__dirname, "/src/index.tsx"),
    "output": {
      "filename": "js/bundle.js",
      "path": path.join(__dirname, "/dist")
    },
    "module": {
      "rules": [
        {
          "test": /\.tsx?$/,
          "use": ["babel-loader", "ts-loader"],
          "exclude": /node_modules/,
        },{ 
          "test": /\.s(c|a)ss$/,
          "exclude": /node_modules/,
          "use": ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }
      ]
    },
    "resolve": {
      "extensions": [ ".tsx", ".ts", ".js", ".json"]
    },
    "plugins": [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
}