import { Film } from '../../types/films-types';
import { getRatingLevel } from '../../utils/utils';

type Props = {
  film: Film;
}

function OverviewTab({ film }: Props): JSX.Element {
  const { rating, scoresCount, description, director, starring } = film;
  const filmRatingLevel = getRatingLevel(rating);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRatingLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
