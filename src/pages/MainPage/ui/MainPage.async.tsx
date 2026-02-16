<<<<<<< HEAD
import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500);
=======
import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500)
>>>>>>> 3abcf844f842916b4b4c8f6f8bce01e2604c0a4c
}));
