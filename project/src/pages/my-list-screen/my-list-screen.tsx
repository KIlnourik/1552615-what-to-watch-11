import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import LoginUserBlock from '../../components/login-user-block/login-user-block';
import { useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';

function MyListScreen(): JSX.Element {

  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const isFavoriteFilmsLoading = useAppSelector((state) => state.isFavoriteFilmsLoading);

  if (isFavoriteFilmsLoading) {
    return <Spinner />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <LoginUserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardsList films={favoriteFilms} />
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
  );
}

export default MyListScreen;
