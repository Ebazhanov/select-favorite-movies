const path = require('path')
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_module/,
        loader: 'babel-loader'
    }
]

odule.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index/tsx',
    output: {
        path: path.resolve(_dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {extentions: ['.ts', '.tsx', '.js']},
    devServer: {
        contentBase: './',
        port: 5000
    }
}