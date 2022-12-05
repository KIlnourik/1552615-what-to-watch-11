import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { Film } from '../../types/films-types';
import { ALL_GENRES } from '../../const';
import { changeGenre, filterFilmsByGenre } from '../../store/action';
import { Link } from 'react-router-dom';

type Props = {
  films: Film[];
};

function GenresList({ films }: Props): JSX.Element {
  const uniqueGenreList: string[] = [];
  uniqueGenreList.push(ALL_GENRES);
  films.forEach((film) => {
    if (!uniqueGenreList.includes(film.genre)) {
      uniqueGenreList.push(film.genre);
    }
  });

  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const generateGenreItem = (genre: string): JSX.Element => (
    <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
      <Link to='' onClick={() => { dispatch(changeGenre(genre)); dispatch(filterFilmsByGenre()); }} className="catalog__genres-link">{genre}</Link>
    </li >
  );

  return (
    <ul className="catalog__genres-list">
      {uniqueGenreList.map((genre) => generateGenreItem(genre))}
    </ul>);
}

export default GenresList;
