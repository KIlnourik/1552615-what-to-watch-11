import { Link } from 'react-router-dom';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import Logo from '../../components/logo/logo';
import { AppRoute, MAX_FILMS_COUNT } from '../../const';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks/index';
import { useState } from 'react';

type Props = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: number;
};

function MainScreen({ filmTitle, filmGenre, releaseDate }: Props): JSX.Element {
  const [filmsListCount, setFilmsListCount] = useState(MAX_FILMS_COUNT);

  const films = useAppSelector((state) => state.films);
  const isShowMoreButtonActive = films.length > MAX_FILMS_COUNT;
  const slicedFilms = films.slice(0, filmsListCount);

  const handleShowMoreButtonClick = () => {
    setFilmsListCount(filmsListCount + MAX_FILMS_COUNT);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmGenre}</span>
                <span className="film-card__year">{releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmCardsList films={slicedFilms}/>
          {isShowMoreButtonActive && <ShowMoreButton handleShowMoreButtonClick={handleShowMoreButtonClick}/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Logo />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
