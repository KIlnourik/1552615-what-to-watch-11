import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect } from 'react';
import { fetchPromoFilmAction, fetchFilmsAction } from '../../store/api-actions';
import Logo from '../../components/logo/logo';
import LoginUserBlock from '../../components/login-user-block/login-user-block';
import Spinner from '../../components/spinner/spinner';
import MainScreenCatalog from '../../components/main-screen-catalog/main-screen-catalog';
import MyListButton from '../../components/my-list-button/my-list-button';
import { getPromoFilm, getPromoFilmLoadingStatus } from '../../store/data-process/selector';

function MainScreen(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const dispatch = useAppDispatch();
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoadingStatus);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  if (isPromoFilmLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <section className="film-card" style={{ backgroundColor: promoFilm.backgroundColor }}>
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>
          <LoginUserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton film={promoFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <MainScreenCatalog />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Logo isFooter />
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
