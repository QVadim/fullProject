<<<<<<< HEAD
import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
=======
import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
