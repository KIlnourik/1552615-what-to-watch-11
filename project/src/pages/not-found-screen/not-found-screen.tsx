import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <Fragment>
      <h1>
        <b>Error 404. We are really sorry but page not found</b>
      </h1>
      <Link to={AppRoute.Root}>Go to main page</Link>
    </Fragment>
  );
}

export default NotFoundScreen;
