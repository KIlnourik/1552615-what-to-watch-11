import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { SyntheticEvent } from 'react';

function LoginUserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const isAuthStatus = (status: AuthorizationStatus) => status === AuthorizationStatus.Auth;

  const handleLogoutClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const noAuthUserComponent = (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );

  const authUserComponent = (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to="/" className="user-block__link" onClick={handleLogoutClick}>Sign out</Link>
      </li>
    </ul>
  );

  return isAuthStatus(authStatus) ? authUserComponent : noAuthUserComponent;

}

export default LoginUserBlock;
