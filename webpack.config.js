const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
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
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        noInfo: true,
    },
}
