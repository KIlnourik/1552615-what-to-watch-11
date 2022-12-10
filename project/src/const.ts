export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
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
  Reviews = '/comments/',
}
