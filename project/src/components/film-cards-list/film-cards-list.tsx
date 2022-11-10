import FilmCard from '../film-card/film-card';
import { Film } from '../../types/films-types';
import { useState } from 'react';

type Props = {
  films: Film[];
}

function FilmCardsList({ films }: Props): JSX.Element {
  const [activeFilmId] = useState<number | undefined>(undefined);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <FilmCard film={film} isActive={film.id === activeFilmId} key={film.id} />)}
    </div>
  );
}

export default FilmCardsList;
