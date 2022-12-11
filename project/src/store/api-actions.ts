import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../types/films-types';
import { Review } from '../types/reviews-types';
import { loadFilms, loadReviews, loadSimilarFilms, loadPromoFilm, setFilmsLoadingStatus, requireAuthorization, redirectToRoute, setReviewsLoadingStatus, setSimilarFilmsLoadingStatus, setPromoFilmLoadingStatus } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFilms',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFilms',
  async(id, {dispatch, extra: api}) => {
    dispatch(setSimilarFilmsLoadingStatus(true));
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(setSimilarFilmsLoadingStatus(false));
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchPromoFilm',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setPromoFilmLoadingStatus(true));
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(setPromoFilmLoadingStatus(false));
    dispatch(loadPromoFilm(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchReviews',
  async(id, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${id}`);
    dispatch(setReviewsLoadingStatus(false));
    dispatch(loadReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
