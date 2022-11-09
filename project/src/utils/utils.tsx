import { RatingLevels } from '../const';

export function getRatingLevel(rating: number): string {
  let filmRatingLevel = '';
  RatingLevels.forEach((ratingLevel) => {
    if ((ratingLevel.min <= rating && ratingLevel.max && rating <= ratingLevel.max) || (ratingLevel.min <= rating && ratingLevel.max === null)) {
      filmRatingLevel = ratingLevel.level;
    }
  });
  return filmRatingLevel;
}


