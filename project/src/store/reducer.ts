import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterFilmsByGenre, loadFilms, loadSimilarFilms, loadReviews, requireAuthorization, setFilmsLoadingStatus, setReviewsLoadingStatus, setSimilarFilmsLoadingStatus, uploadReview } from './action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';

const emptyUserReview = {
  comment: '',
  date: '',
  id: 0,
  rating: 0,
  user: {
    id: 0,
    name: '',
  }
};

type InitialState = {
  genre: string;
  films: Film[];
  similarFilms: Film[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
  isReviewsLoading: boolean;
  isSimilarFilmsLoading: boolean;
  userReview: Review;
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  similarFilms: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
  isReviewsLoading: false,
  isSimilarFilmsLoading: false,
  userReview: emptyUserReview,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.films = [...state.films];
      } else {
        state.films = state.films.filter(
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
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(setSimilarFilmsLoadingStatus, (state, action) => {
      state.isSimilarFilmsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(uploadReview, (state, action) => {
      state.userReview = action.payload;
    });
});

export { reducer };
