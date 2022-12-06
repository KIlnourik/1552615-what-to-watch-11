import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre, resetFilmsListCount, showMoreFilms } from './action';
import { films } from '../mocks/films';
import { ALL_GENRES, MAX_FILMS_COUNT } from '../const';
import { reviews } from '../mocks/reviews';

const originalFilms = films;

const mockReviews = reviews;

const initialState = {
  genre: ALL_GENRES,
  films: [...films],
  originalFilms,
  mockReviews,
  filmsListCount: MAX_FILMS_COUNT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.films = [...films];
        state.filmsListCount = MAX_FILMS_COUNT;
      } else {
        state.films = state.originalFilms.filter(
          (activeFilm) => (
            activeFilm.genre === state.genre
          )
        );
      }
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsListCount += MAX_FILMS_COUNT;
    })
    .addCase(resetFilmsListCount, (state) => {
      state.filmsListCount = MAX_FILMS_COUNT;
    });
});

export { reducer };
