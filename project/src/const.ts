export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

type RatingLevelType = {
  level: string;
  min: number;
  max: number | null;
};
type RatingLevelsType = RatingLevelType[]

export const RatingLevels: RatingLevelsType = [
  {
    level: 'Bad',
    min: 0,
    max: 3,
  },
  {
    level: 'Normal',
    min: 3,
    max: 5,
  },
  {
    level: 'Good',
    min: 5,
    max: 8,
  },
  {
    level: 'Very good',
    min: 8,
    max: 10,
  },
  {
    level: 'Awesome',
    min: 10,
    max: null,
  }
];

export const RATING_MAX_VALUE = 10;

export const AUTOPLAY_TIMEOUT = 1000;

export const MINUTES_PER_HOUR = 60;

export const SECONDS_PER_HOUR = 3600;

export const FilmTabs = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews'
};

export const ALL_GENRES = 'All genres';

export const MAX_GENRES_COUNT = 10;

export const MAX_FILMS_COUNT = 8;

export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export const BACKEND_URL = 'https://11.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Promo = '/promo',
  Favorite = '/favorite',
}

export const EmptyUserReview = {
  comment: '',
  rating: 0,
  activeFilmId: '',
};

export const EmptyPromoFilm = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

export const MIN_COMMENT_LENGTH = 50;

export const MAX_COMMENT_LENGTH = 400;

export enum NameSpace {
    Data = 'DATA',
    Catalog = 'Catalog',
    User = 'USER',
}

export const EMAIL_REGULAR_EXPR = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const PASSWORD_REGULAR_EXPR = /^(?=.*\d)(?=.*[A-Za-zА-Яа-яЁё])([^\s]){2,}$/i;
