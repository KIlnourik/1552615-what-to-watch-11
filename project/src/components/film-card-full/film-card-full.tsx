import { Film } from '../../types/films-types';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginUserBlock from '../login-user-block/login-user-block';
import { useAppSelector } from '../../hooks';
import MyListButton from '../my-list-button/my-list-button';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import Tabs from '../../components/tabs/tabs';

type Props = {
  film: Film;
}

function FilmCardFull({ film }: Props) {
  const { id, name, posterImage, backgroundImage, backgroundColor, genre, released } = film;
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="film-card film-card--full" style={{ backgroundColor: backgroundColor }}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          < LoginUserBlock />
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
              <MyListButton film={film} />
              <Link to={authStatus === AuthorizationStatus.Auth ? `/films/${id}/review` : `${AppRoute.SignIn}`} className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt="{name}" width="218" height="327" />
          </div>

          <Tabs film={film} />
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;
