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
