import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoriteFilmsAction, fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/data-process/selector';
import { getAuthorizationStatus } from '../../store/user-process/selector';
import { Film } from '../../types/films-types';

type Props = {
  film: Film;
}

function MyListButton({ film }: Props): JSX.Element {
  const {id, isFavorite} = film;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const handleButtonClick = (): void => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    } else {
      dispatch(setFavoriteFilmsAction([id, !isFavorite]));
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleButtonClick}>
      {isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>)}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button >
  );
}

export default MyListButton;
