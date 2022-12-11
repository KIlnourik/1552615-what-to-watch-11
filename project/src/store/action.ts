import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films-types';
import {AuthorizationStatus, AppRoute} from '../const';
import { Review } from '../types/reviews-types';
import { UserReview } from '../types/user-review';

export const changeGenre = createAction('genre/changeGenre', (activeGenre) => ({
  payload: activeGenre as string,
}));

export const filterFilmsByGenre = createAction('films/filterFilmsByGenre');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const loadReviews = createAction<Review[]>('films/loadReviews');

export const loadSimilarFilms = createAction<Film[]>('films/loadSimilarFilms');

export const loadPromoFilm = createAction<Film>('films/loadPromoFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

export const setPromoFilmLoadingStatus = createAction<boolean>('films/setPromoFilmLoadingStatus');

export const setReviewsLoadingStatus = createAction<boolean>('films/setReviewsLoadingStatus');

export const setSimilarFilmsLoadingStatus = createAction<boolean>('films/setSimilarFilmsLoadingStatus');

export const sendReview = createAction<UserReview>('user/uploadReview');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');
