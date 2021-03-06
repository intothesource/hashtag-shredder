const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const serverConfig = {
    target: 'web',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hashtag-shredder.js',
        libraryTarget: 'umd',
        library: 'hashtagShredder',
        umdNamedDefine: true,
        globalObject: '(typeof self !== \'undefined\' ? self : this)'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
};

// const browserConfig = {
//     target: 'web',
//     entry: './index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'hashtag-shredder.umd.js',
//         libraryTarget: 'umd',
//     },
//     // devtool: 'source-map',
//     // module: {
//     //     rules: [
//     //         {
//     //             test: /\.js$/,
//     //             exclude: /(node_modules)/,
//     //             use: {
//     //                 loader: 'babel-loader',
//     //                 options: {
//     //                     presets: ['@babel/preset-env'],
//     //                 },
//     //             },
//     //         },
//     //         {
//     //             test: /\.css$/i,
//     //             use: ['style-loader', 'css-loader'],
//     //         },
//     //     ],
//     // },
//     // plugins: [
//     //     new HtmlWebpackPlugin({
//     //         template: 'index.html',
//     //     }),
//     // ],
// };

module.exports = (/* env, argv */) => {
    return [{ ...serverConfig }];
};
