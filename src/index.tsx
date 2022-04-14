import React from 'react';
import App from './components/app/app';
import {Provider} from 'react-redux';
import './general.scss';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import {createRoot} from 'react-dom/client';
import {store} from './store';
import {fetchCompaniesDataAction} from './store/api-actions';

store.dispatch(fetchCompaniesDataAction());

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
