import { Routes, Route } from 'react-router-dom';
import { AppRoute, FilmTabs } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import Tabs from '../tabs/tabs';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getFilms } from '../../store/data-process/selector';

function App(): JSX.Element {
  const films = useAppSelector(getFilms);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Film}:id`} element={<FilmScreen />} >
          <Route path={''} element={<Tabs tab={FilmTabs.Overview} />} />
          <Route path={'/films/:id/Details'} element={<Tabs tab={FilmTabs.Details} />} />
          <Route path={'/films/:id/Reviews'} element={<Tabs tab={FilmTabs.Reviews} />} />
        </Route>

        <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
