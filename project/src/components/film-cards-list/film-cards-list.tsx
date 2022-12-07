import FilmCard from '../film-card/film-card';
import { Film } from '../../types/films-types';
import { SyntheticEvent, useState } from 'react';

type Props = {
  films: Film[];
}

function FilmCardsList({films}: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | undefined>(undefined);

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
      {films.map((film: Film) => <FilmCard film={film} isActive={film.id === activeFilmId} key={film.id} />)}
    </div>
  );
}

export default FilmCardsList;
