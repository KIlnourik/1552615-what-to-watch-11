import Logo from '../../components/logo/logo';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { FormEvent, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus, EMAIL_REGULAR_EXPR, PASSWORD_REGULAR_EXPR } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selector';

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef !== null && passwordRef !== null) {
      const emailValidCondition = EMAIL_REGULAR_EXPR.test(String(emailRef.current?.value));
      const passwordValidCondition = PASSWORD_REGULAR_EXPR.test(String(passwordRef.current?.value));
      if (emailValidCondition && passwordValidCondition) {
        onSubmit({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        });
      }
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef} required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} title="Should contain 1 letter and 1 number" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Logo isFooter />
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginScreen;
