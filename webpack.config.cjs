const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        clean: true,
        assetModuleFilename: 'components/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|ico|gif|mp4|mp3|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        static: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};

module.exports = (env, options) => {
    conf.devtool = (options.mode === 'production') ? 'hidden-source-map' : 'source-map';

    return conf;
};
