import { FilmsType } from '../../types/films-types';
import { getRatingLevel } from '../../utils/utils';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  film: FilmsType;
}

function FilmCardFull({ film }: Props) {
  const { id, name, posterImage, backgroundImage, description, rating, scoresCount, director, starring, genre, released
  } = film;
  const filmRatingLevel = getRatingLevel(rating);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="#todo" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </Link>
              <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#todo" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="#todo" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#todo" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;