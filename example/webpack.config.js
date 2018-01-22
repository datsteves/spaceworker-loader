const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.worker\.js$/, use: { loader: 'spaceworker-loader' } }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './template.ejs'})
    ]
}

module.exports = config