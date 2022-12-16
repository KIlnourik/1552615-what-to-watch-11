import { MAX_FILMS_COUNT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect, useState } from 'react';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Spinner from '../spinner/spinner';
import { fetchFilmsAction } from '../../store/api-actions';

function MainScreenCatalog(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  const films = useAppSelector((state) => state.filteredFilms);
  const [filmsListCount, setFilmsListCount] = useState(MAX_FILMS_COUNT);
  // const isShowMoreButtonActive = films.length > MAX_FILMS_COUNT;
  const slicedFilms = films.slice(0, filmsListCount);

  const handleShowMoreButtonClick = () => {
    setFilmsListCount(filmsListCount + MAX_FILMS_COUNT);
  };

  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);

  if (isFilmsLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <FilmCardsList films={slicedFilms} />
      {films.length > filmsListCount && <ShowMoreButton handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
}

export default MainScreenCatalog;
