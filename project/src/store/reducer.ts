import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre, loadFilms, requireAuthorization, setFilmsLoadingStatus, setError } from './action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';
import {reviews } from '../mocks/reviews';

type InitalState = {
  genre: string;
  films: Film[];
  originalFilms: Film[];
  mockReviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
  error: string | null;
}

const mockReviews = reviews;

const initialState: InitalState = {
  genre: ALL_GENRES,
  films: [],
  originalFilms: [],
  mockReviews: mockReviews,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.films = [...state.originalFilms];
      } else {
        state.films = state.originalFilms.filter(
          (activeFilm) => (
            activeFilm.genre === state.genre
          )
        );
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
