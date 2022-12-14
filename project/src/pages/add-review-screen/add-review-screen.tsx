import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { Film } from '../../types/films-types';
import { Link, useParams } from 'react-router-dom';
import LoginUserBlock from '../../components/login-user-block/login-user-block';

type Props = {
  films: Film[];
}

function AddReviewScreen({ films }: Props): JSX.Element {

  const { id } = useParams();

  const activeFilm = films.find((film) => film.id.toString() === id);
  if (!activeFilm) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${activeFilm.id}`} className="breadcrumbs__link">{activeFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <LoginUserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={activeFilm.posterImage} alt={`${activeFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
