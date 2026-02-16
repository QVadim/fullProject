<<<<<<< HEAD
import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
=======
import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";


export default (env: BuildEnv) => {

>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
<<<<<<< HEAD
    });

    return config;
=======
    })

    return config
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
};
