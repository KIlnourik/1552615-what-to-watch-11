import Logo from '../../components/logo/logo';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchReviewsAction, fetchSimilarFilmsAction, fetchFilmAction } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import { getFilm, getReviewsLoadingStatus, getSimilarFilms, getSimilarFilmsLoadingStatus, getFilmLoadingStatus } from '../../store/data-process/selector';

function FilmScreen(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const isSimilarFilmsLoading = useAppSelector(getSimilarFilmsLoadingStatus);
  const isFilmLoading = useAppSelector(getFilmLoadingStatus);

  useEffect(() => {
    if (id && !film && !isFilmLoading) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchSimilarFilmsAction(id));
    } else {
      <Spinner />;
    }
  }, [id, dispatch, isFilmLoading, film]);

  if (isReviewsLoading || isSimilarFilmsLoading || isFilmLoading || !id || !film) {
    return <Spinner />;
  }

  return (
    <>
      <FilmCardFull film={film} />
      <div className="page-content">

        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardsList films={similarFilms} />
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

export default FilmScreen;
