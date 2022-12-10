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
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type Props = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: number;
};

function App({ filmTitle, filmGenre, releaseDate }: Props): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const reviews = useAppSelector((state) => state.reviews);
  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);
  if (isFilmsLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute>
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmScreen films={films} />} >
          <Route path={''} element={<Tabs tab={FilmTabs.Overview} films={films} reviews={reviews} />} />
          <Route path={'/films/:id/Details'} element={<Tabs tab={FilmTabs.Details} films={films} reviews={reviews} />} />
          <Route path={'/films/:id/Reviews'} element={<Tabs tab={FilmTabs.Reviews} films={films} reviews={reviews} />} />
        </Route>

        <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films} />} />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
