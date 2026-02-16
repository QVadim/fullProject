<<<<<<< HEAD
import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
=======
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

    return {
        mode,
        entry: paths.entry,
        output: {
<<<<<<< HEAD
            filename: '[name].[contenthash].js',
=======
            filename: "[name].[contenthash].js",
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
<<<<<<< HEAD
            rules: buildLoaders(options),
=======
            rules: buildLoaders(options)
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
