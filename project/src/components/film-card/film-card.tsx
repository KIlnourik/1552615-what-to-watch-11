import { Link } from 'react-router-dom';
import { Film } from '../../types/films-types';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  isActive: boolean;
};

function FilmCard({ film, isActive }: Props): JSX.Element {
  const { id, name, previewImage } = film;
  return (
    <article className="small-film-card catalog__films-card" id={id.toString()}>
      <div className="small-film-card__image" id={id.toString()}>
        {isActive
          ? <VideoPlayer film={film} autoPlay />
          : <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title" id={id.toString()}>
        <Link to={`/films/${id}`} className="small-film-card__link" id={id.toString()}>{name} </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
