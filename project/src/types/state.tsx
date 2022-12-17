import { store } from '../store/index';
import { Film } from './films-types';
import { Review } from './reviews-types';
import { UserReview } from '../types/user-review';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type DataProcess = {
  films: Film[];
  filteredFilms: Film[];
  similarFilms: Film[];
  reviews: Review[];
  isFilmsLoading: boolean;
  isReviewsLoading: boolean;
  isSimilarFilmsLoading: boolean;
  favoriteFilms: Film[];
  isFavoriteFilmsLoading: boolean;
  promoFilm: Film;
  isPromoFilmLoading: boolean;
}

export type UserProcess = {
  userReview: UserReview;
  authorizationStatus: AuthorizationStatus;
}

export type CatalogProcess = {
  genre: string;
  filteredFilms: Film[];
}
