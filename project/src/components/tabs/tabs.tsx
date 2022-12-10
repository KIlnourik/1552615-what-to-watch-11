import { Film } from '../../types/films-types';
import { FilmTabs } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Review } from '../../types/reviews-types';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tab: string;
  films: Film[];
  reviews: Review[];
};

function renderTabs(tab: string, film: Film, reviews: Review[]) {
  switch (tab) {
    case FilmTabs.Overview:
      return <OverviewTab film={film} />;
    case FilmTabs.Details:
      return <DetailsTab film={film} />;
    case FilmTabs.Reviews:
      return <ReviewsTab reviews={reviews} />;
  }
}

function Tabs({ tab, films, reviews }: Props): JSX.Element {
  const { id } = useParams();
  const activeFilm = films.find((film) => film.id.toString() === id);
  if (!activeFilm) {
    return <NotFoundScreen />;
  }
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === FilmTabs.Overview ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${activeFilm.id}`} className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${tab === FilmTabs.Details ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${activeFilm.id}/Details`} className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${tab === FilmTabs.Reviews ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${activeFilm.id}/Reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {renderTabs(tab, activeFilm, reviews)}
    </div>
  );
}

export default Tabs;
