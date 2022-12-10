import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { Film } from '../../types/films-types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
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
      dispatch(fetchSimilarFilmsAction(id));
    }
  }, [id, dispatch]);

  const reviews = useAppSelector((state) => state.reviews);
  const similarFilms = useAppSelector((state) => state.similarFilms).slice(0, 3);
  const isReviewsLoading = useAppSelector((state) => state.isReviewsLoading);
  const isSimilarFilmsLoading = useAppSelector((state) => state.isSimilarFilmsLoading);
  if (isReviewsLoading || isSimilarFilmsLoading) {
    return <Spinner />;
  }

  if (!activeFilm) {
    return <NotFoundScreen />;
  }

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
