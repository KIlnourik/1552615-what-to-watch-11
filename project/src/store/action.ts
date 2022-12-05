import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('genre/changeGenre', (activeGenre) => ({
  payload: activeGenre as string,
}));

export const filterFilmsByGenre = createAction('films/filterFilmsByGenre');
