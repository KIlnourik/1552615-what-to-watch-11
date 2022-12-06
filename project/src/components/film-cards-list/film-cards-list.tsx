import FilmCard from '../film-card/film-card';
import { Film } from '../../types/films-types';
import { SyntheticEvent, useState } from 'react';
import { MAX_FILMS_COUNT} from '../../const';
import { useAppSelector } from '../../hooks';

type Props = {
  films: Film[];
}

function FilmCardsList({films}: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | undefined>(undefined);

  const filmsListCount = useAppSelector((state) => state.filmsListCount);
  const shownFilms = films.length > MAX_FILMS_COUNT ? films.slice(0, filmsListCount) : films;

  function handleMouseOver(evt: SyntheticEvent) {
    const targetElement = evt.target as Element;
    if (targetElement.closest('.small-film-card')) {
      setActiveFilmId(parseInt(targetElement.id, 10));
    } else {
      setActiveFilmId(undefined);
    }
  }

  return (
    <div className="catalog__films-list" onMouseOver={handleMouseOver} onMouseOut={() => setActiveFilmId(undefined)}>
      {shownFilms.map((film: Film) => <FilmCard film={film} isActive={film.id === activeFilmId} key={film.id} />)}
    </div>
  );
}

export default FilmCardsList;
