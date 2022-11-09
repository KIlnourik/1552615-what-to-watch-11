import FilmCard from '../film-card/film-card';
import { FilmsType, FilmsTypes } from '../../types/films-types';
import { useState } from 'react';

type Props = {
  films: FilmsTypes;
}

function FilmCardsList({ films }: Props): JSX.Element {
  const [activeFilmId] = useState<string | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film: FilmsType) => <FilmCard film={film} isActive={`${film.id}` === activeFilmId} key={film.id} />)}
    </div>
  );
}

export default FilmCardsList;
