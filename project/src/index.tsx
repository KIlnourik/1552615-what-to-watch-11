import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';

const Settings = {
  FilmTitle: 'The Grand Budapest Hotel',
  FilmGenre: 'Drama',
  ReleaseDate: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmTitle={Settings.FilmTitle}
      filmGenre={Settings.FilmGenre}
      releaseDate={Settings.ReleaseDate}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
);
