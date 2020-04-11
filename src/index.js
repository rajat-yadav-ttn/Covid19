import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import thunk from 'redux-thunk';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware,compose} from 'redux';
import reducer from './store/reducers.js';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
