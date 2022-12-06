import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('genre/changeGenre', (activeGenre) => ({
  payload: activeGenre as string,
}));

export const filterFilmsByGenre = createAction('films/filterFilmsByGenre');

export const showMoreFilms = createAction('films/showMoreFilms');

export const resetFilmsListCount = createAction('films/resetFilmsListCount');
