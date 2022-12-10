import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films-types';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeGenre = createAction('genre/changeGenre', (activeGenre) => ({
  payload: activeGenre as string,
}));

export const filterFilmsByGenre = createAction('films/filterFilmsByGenre');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');
