import { RatingLevels, MINUTES_PER_HOUR, MAX_FILMS_COUNT } from '../const';
import { Film } from '../types/films-types';

export function getRatingLevel(rating: number): string {
  let filmRatingLevel = '';
  RatingLevels.forEach((ratingLevel) => {
    if ((ratingLevel.min <= rating && ratingLevel.max && rating <= ratingLevel.max) || (ratingLevel.min <= rating && ratingLevel.max === null)) {
      filmRatingLevel = ratingLevel.level;
    }
  });
  return filmRatingLevel;
}

export function getRatingValues(maxRating: number): number[] {
  const ratingArray: number[] = [];
  for (let i = 1; i <= maxRating; i++) {
    ratingArray.push(i);
  }
  return ratingArray;
}

export function getTimeUserView(runTime: number): string {
  if (runTime % MINUTES_PER_HOUR < 1) {
    return `${runTime}m`;
  } else {
    return `${Math.floor(runTime / MINUTES_PER_HOUR)}h ${runTime % MINUTES_PER_HOUR}m`;
  }
}

export function checkFilmsListCount(films: Film[]): boolean {
  if (films.length < MAX_FILMS_COUNT) {
    return true;
  }
  return false;
}
