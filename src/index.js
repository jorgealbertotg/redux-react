import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './store/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
      return result;
    };
  };
}

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
