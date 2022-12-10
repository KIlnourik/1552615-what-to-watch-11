import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { Film } from '../../types/films-types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchReviewsAction } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';

type Props = {
  films: Film[];
}

function FilmScreen({ films }: Props): JSX.Element {

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const activeFilm = films.find((film) => film.id.toString() === id);

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  const reviews = useAppSelector((state) => state.reviews);
  const isReviewsLoading = useAppSelector((state) => state.isReviewsLoading);

  if (isReviewsLoading) {
    return <Spinner />;
  }

  if (!activeFilm) {
    return <NotFoundScreen />;
  }

  const similarFilms: Film[] | undefined = films.filter((film) => {
    if (film.id !== activeFilm.id && film.genre === activeFilm.genre) {
      return film;
    }
    return undefined;
  }).slice(0, 3);

  return (
    <>
      <FilmCardFull film={activeFilm} reviews={reviews} />
      <div className="page-content">

        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardsList films={similarFilms} />
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
