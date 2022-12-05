import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre } from './action';
import { films } from '../mocks/films';
import { ALL_GENRES } from '../const';

const originalFilms = films;

const initialState = {
  genre: ALL_GENRES,
  films: [...originalFilms],
  originalFilms
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.films = [...films];
      } else {
        state.films = state.originalFilms.filter(
          (activeFilm) => (
            activeFilm.genre === state.genre
          )
        );
      }
    });
});

export { reducer };
