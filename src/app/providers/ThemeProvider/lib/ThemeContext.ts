<<<<<<< HEAD
import { createContext } from 'react';
=======
import {createContext} from "react";
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

<<<<<<< HEAD
export const ThemeContext = createContext<ThemeContextProps>({});
=======
export const ThemeContext = createContext<ThemeContextProps>({})
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

export const LOCAL_STORAGE_THEME_KEY = 'theme';
