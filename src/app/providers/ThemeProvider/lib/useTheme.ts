<<<<<<< HEAD
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
=======
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
<<<<<<< HEAD
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
=======
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}
