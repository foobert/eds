const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index',
    ],
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: '/assets/',
    },
    resolve: {
        modulesDirectories: ['src', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src'),],
                exclude: [path.resolve(__dirname, 'node_modules'),],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {modules: true}},
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src"),
        ],
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname,
        compress: true,
        historyApiFallback: true,
        hot: true,
        noInfo: true,
    },
}
