<<<<<<< HEAD
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';
=======
import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
<<<<<<< HEAD
        hot: true,
    };
=======
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
