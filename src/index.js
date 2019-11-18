import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import './styles/custom-reset.css'
import AppContainer from "./containers/appContainer";
import { reducer } from "./reducers/reducer";

let store = createStore(
  reducer,
  +window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,

  document.getElementById("root")
);
