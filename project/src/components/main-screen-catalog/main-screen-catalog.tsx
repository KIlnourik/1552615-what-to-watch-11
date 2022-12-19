import { MAX_FILMS_COUNT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect, useState } from 'react';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Spinner from '../spinner/spinner';
import { getFilteredFilms } from '../../store/catalog-process/selector';
import { getFilmsLoadingStatus } from '../../store/data-process/selector';
import { filterFilmsByGenre } from '../../store/catalog-process/catalog-process';
import { getFilms } from '../../store/data-process/selector';

function MainScreenCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const [filmsCount, setFilmsCount] = useState(MAX_FILMS_COUNT);

  useEffect(() => {
    dispatch(filterFilmsByGenre(films));
  }, [dispatch, films]);

  const handleShowMoreButtonClick = () => {
    setFilmsCount(filmsCount + MAX_FILMS_COUNT);
  };

  const isFilmsLoading = useAppSelector(getFilmsLoadingStatus);

  if (isFilmsLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmCardsList films={filteredFilms.slice(0, filmsCount)} />
      {filteredFilms.length > filmsCount && <ShowMoreButton handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
}

export default MainScreenCatalog;
