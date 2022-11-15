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

export function getRatingValues(maxRating: number): number[] {
  const ratingArray: number[] = [];
  for (let i = 1; i <= maxRating; i++) {
    ratingArray.push(i);
  }
  return ratingArray;
}
