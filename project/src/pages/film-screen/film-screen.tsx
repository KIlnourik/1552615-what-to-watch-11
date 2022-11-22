import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { Film } from '../../types/films-types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Review } from '../../types/reviews-types';

type Props = {
  films: Film[];
  reviews: Review[];
};

function FilmScreen({ films, reviews }: Props): JSX.Element {

  const { id } = useParams();

  const activeFilm = films.find((film) => film.id.toString() === id);

  if (!activeFilm) {
    return <NotFoundScreen />;
  }
  return (
    <>
      <FilmCardFull film={activeFilm} reviews={reviews}/>
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
