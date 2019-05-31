module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index/tsx',
    output: {
        path: null,
        filename: 'bundle.js'
    },
    module: null,
    resolve: {extentions: ['.ts', '.tsx', '.js']},
    devServer: {
        contentBase: './',
        port: 5000
    }
}