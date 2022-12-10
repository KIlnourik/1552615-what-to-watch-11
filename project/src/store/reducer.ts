import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre, loadFilms, loadReviews, requireAuthorization, setFilmsLoadingStatus, setReviewsLoadingStatus } from './action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';

type InitialState = {
  genre: string;
  films: Film[];
  originalFilms: Film[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
  isReviewsLoading: boolean;
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  originalFilms: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
  isReviewsLoading: false,
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
