import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import { Review } from '../../types/reviews-types';
import { Film } from '../../types/films-types';

type Props = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: number;
  films: Film[];
  reviews: Review[];
};

function App({ filmTitle, filmGenre, releaseDate, films, reviews }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen filmTitle={filmTitle} filmGenre={filmGenre} releaseDate={releaseDate} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmScreen films={films} />} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films}/>} />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
