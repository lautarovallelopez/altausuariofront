import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import CreateStore from './store';
import 'bootstrap/scss/bootstrap.scss';
import * as serviceWorker from './serviceWorker';

const store = CreateStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
