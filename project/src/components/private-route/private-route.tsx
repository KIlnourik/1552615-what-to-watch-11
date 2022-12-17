import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selector';

type Props = {
  children: JSX.Element;
}

function PrivateRoute(props: Props): JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector(getAuthorizationStatus);
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
