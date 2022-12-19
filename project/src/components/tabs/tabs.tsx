import { Film } from '../../types/films-types';
import { FilmTabs } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import { useState } from 'react';

type Props = {
  film: Film;
};

function renderTabs(tab: string, film: Film) {
  switch (tab) {
    case FilmTabs.Overview:
      return <OverviewTab film={film} />;
    case FilmTabs.Details:
      return <DetailsTab film={film} />;
    case FilmTabs.Reviews:
      return <ReviewsTab />;
  }
}

function Tabs({ film }: Props): JSX.Element {
  const [tab, setTab] = useState(FilmTabs.Overview);

  const openOverviewTab = () => {
    setTab(FilmTabs.Overview);
  };

  const openReviewsTab = () => {
    setTab(FilmTabs.Reviews);
  };

  const openDetailsTab = () => {
    setTab(FilmTabs.Details);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === FilmTabs.Overview ? 'film-nav__item--active' : ''}`} onClick={openOverviewTab}>
            <span className="film-nav__link">Overview</span>
          </li>
          <li className={`film-nav__item ${tab === FilmTabs.Details ? 'film-nav__item--active' : ''}`} onClick={openDetailsTab}>
            <span className="film-nav__link">Details</span>
          </li>
          <li className={`film-nav__item ${tab === FilmTabs.Reviews ? 'film-nav__item--active' : ''}`} onClick={openReviewsTab}>
            <span className="film-nav__link">Reviews</span>
          </li>
        </ul>
      </nav>

      {renderTabs(tab, film )}
    </div>
  );
}

export default Tabs;
