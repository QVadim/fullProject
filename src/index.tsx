<<<<<<< HEAD
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import './shared/config/i18n/i18n';
=======
import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
<<<<<<< HEAD
    document.getElementById('root'),
);
=======
    document.getElementById('root')
)
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
