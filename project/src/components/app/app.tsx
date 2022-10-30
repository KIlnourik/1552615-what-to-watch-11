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

type Props = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: number;
};

function App({ filmTitle, filmGenre, releaseDate }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen filmTitle={filmTitle} filmGenre={filmGenre} releaseDate={releaseDate} />}
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
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route path=':id' element={<FilmScreen />} />
          <Route path={AppRoute.AddReview} element={<AddReviewScreen />} />
        </Route>
        <Route path={AppRoute.Player}>
          <Route path=':id' element={<PlayerScreen />} />
        </Route>
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
