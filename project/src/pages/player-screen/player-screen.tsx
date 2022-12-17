import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/films-types';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Player from '../../components/player/player';
import { getFilms, getPromoFilm } from '../../store/data-process/selector';

function PlayerScreen(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilms);
  const { id } = useParams();

  const activeFilm: Film | undefined = films.find((film) => film.id.toString() === id) ;

  if (!activeFilm && !promoFilm) {
    return <NotFoundScreen />;
  }

  if (!activeFilm) {
    return <Player film={promoFilm} />;
  }

  return (
    <Player film={activeFilm} />
  );
}

export default PlayerScreen;
