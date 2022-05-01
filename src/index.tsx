import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import HistoryRouter from './components/history-router/history-router'
import browserHistory from './browser-history'
import { store } from './store/store'
import App from './app'

import './general.scss'

// store.dispatch(fetchCompaniesDataAction())

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
)
