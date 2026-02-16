<<<<<<< HEAD
=======

>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
