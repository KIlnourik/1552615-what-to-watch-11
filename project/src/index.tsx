import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { fetchFilmsAction, checkAuthAction } from './store/api-actions';
import { getToken } from './services/token';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if (getToken()) {
  store.dispatch(checkAuthAction);
}

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
);
