import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './utils/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

let store;
if (process.env.NODE_ENV !== 'production') {
  store = createStore(todos, devToolsEnhancer());
} else {
  store = createStore(todos);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

