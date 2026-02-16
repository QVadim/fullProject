<<<<<<< HEAD
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
=======
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
<<<<<<< HEAD
                loader: 'css-loader',
=======
                loader: "css-loader",
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
<<<<<<< HEAD
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
=======
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
<<<<<<< HEAD
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
=======
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
