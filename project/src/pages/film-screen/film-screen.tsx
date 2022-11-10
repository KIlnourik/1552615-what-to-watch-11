import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { Film } from '../../types/films-types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  films: Film[];
};

function FilmScreen({ films }: Props): JSX.Element {

  const { id } = useParams();

  const activeFilm = films.find((film) => film.id.toString() === id);

  if (!activeFilm) {
    return <NotFoundScreen />;
  }
  return (
    <>
      <FilmCardFull film={activeFilm} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmCardsList films={films} />
          </div>
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

export default FilmScreen;
