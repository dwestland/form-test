import React from 'react';
import { render } from 'react-dom'
import './index.css';
import AppRouter from './routers/AppRouter';

import { Provider } from 'react-redux';
import Store from './store';

const store = Store();

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
