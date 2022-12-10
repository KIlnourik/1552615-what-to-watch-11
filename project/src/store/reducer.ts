import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre, loadFilms, requireAuthorization, setFilmsLoadingStatus } from './action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';
import {reviews } from '../mocks/reviews';

type InitialState = {
  genre: string;
  films: Film[];
  originalFilms: Film[];
  mockReviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
}

const mockReviews = reviews;

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  originalFilms: [],
  mockReviews: mockReviews,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
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
    });
});

export { reducer };
