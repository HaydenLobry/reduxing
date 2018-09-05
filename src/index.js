import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOOLS_EXTENSION__ || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxPromise));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
