import { Film } from '../../types/films-types';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/reviews-types';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Data].favoriteFilms;
export const getPromoFilm = (state: State): Film => state[NameSpace.Data].promoFilm;
export const getFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsLoading;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewsLoading;
export const getSimilarFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isSimilarFilmsLoading;
export const getFavoriteFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteFilmsLoading;
export const getPromoFilmLoadingStatus = (state: State): boolean => state[NameSpace.Data].isPromoFilmLoading;
