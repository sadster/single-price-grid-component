const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${baseWebpackConfig.externals.paths.assets}/css/[name].css`,
        }),
    ],

    module: {
        rules:[
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, '../postcss.config.js'),
                            },
                        },
                    },
                    'sass-loader']
            },

            // {
            //     test: /\.(woff(2)?|ttf|eot)$/,
            //     loader: 'file-loader'
            // }
        ]
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})