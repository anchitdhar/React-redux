import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/actions/projectActions';
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
