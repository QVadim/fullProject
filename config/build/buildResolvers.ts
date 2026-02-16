<<<<<<< HEAD
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
=======
import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
<<<<<<< HEAD
        alias: {},
    };
=======
        alias: {}
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
