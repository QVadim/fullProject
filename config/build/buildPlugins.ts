<<<<<<< HEAD
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
=======
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
<<<<<<< HEAD
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
=======
        })
    ]
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
