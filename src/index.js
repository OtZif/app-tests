import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';

import RootSaga from './sagas/index'

import './styles/custom-reset.css'
import AppContainer from "./containers/appContainer";
import reducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(RootSaga)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,

  document.getElementById("root")
);
