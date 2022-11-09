import { Link } from 'react-router-dom';
import { FilmsType } from '../../types/films-types';

type Props = {
  film: FilmsType;
  isActive: boolean;
};

function FilmCard({ film, isActive }: Props): JSX.Element {
  const {id, name, previewImage} = film;
  return (
    <article className="small-film-card catalog__films-card" key={id}>
      <div className="small-film-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title" key={id}>
        <Link to={`films/${id}`} className="small-film-card__link" >{name} </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
