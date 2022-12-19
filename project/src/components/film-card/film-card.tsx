import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films-types';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  isActive: boolean;
};

function FilmCard({ film, isActive }: Props): JSX.Element {
  const navigate = useNavigate();
  const { id, name, previewImage } = film;

  const handleCardClick = () => {
    navigate(`/films/${id}`);
  };

  return (
    <article className="small-film-card catalog__films-card" id={id.toString()} onClick={handleCardClick}>
      <div className="small-film-card__image" id={id.toString()}>
        {isActive
          ? <VideoPlayer film={film} autoPlay />
          : <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" />}
      </div>
      <h3 className="small-film-card__title" id={id.toString()}>
        <Link to={`/films/${id}`} className="small-film-card__link" id={id.toString()}>{name} </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
