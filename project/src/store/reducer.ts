import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  filterFilmsByGenre,
  loadFilms,
  loadSimilarFilms,
  loadPromoFilm,
  loadReviews,
  loadFavoriteFilms,
  requireAuthorization,
  setFilmsLoadingStatus,
  setReviewsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setPromoFilmLoadingStatus,
  setFavoriteFilmsLoadingStatus,
  sendReview,
  setFavoriteFilms,
} from './action';
import { ALL_GENRES, AuthorizationStatus, EmptyPromoFilm, EmptyUserReview } from '../const';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';
import { UserReview } from '../types/user-review';

type InitialState = {
  genre: string;
  films: Film[];
  filteredFilms: Film[];
  similarFilms: Film[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmsLoading: boolean;
  isReviewsLoading: boolean;
  isSimilarFilmsLoading: boolean;
  favoriteFilms: Film[];
  isFavoriteFilmsLoading: boolean;
  userReview: UserReview;
  promoFilm: Film;
  isPromoFilmLoading: boolean;
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  filteredFilms: [],
  similarFilms: [],
  reviews: [],
  favoriteFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsLoading: false,
  isReviewsLoading: false,
  isSimilarFilmsLoading: false,
  isFavoriteFilmsLoading: false,
  userReview: EmptyUserReview,
  promoFilm: EmptyPromoFilm,
  isPromoFilmLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = [...state.films];
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmsByGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.filteredFilms = [...state.films];
      } else {
        state.filteredFilms = state.films.filter(
          (activeFilm) => (
            activeFilm.genre === state.genre
          )
        );
      }
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
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
    .addCase(setPromoFilmLoadingStatus, (state, action) => {
      state.isPromoFilmLoading = action.payload;
    })
    .addCase(setFavoriteFilmsLoadingStatus, (state, action) => {
      state.isFavoriteFilmsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.userReview = action.payload;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});

export { reducer };
