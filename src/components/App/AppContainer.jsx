import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as action from "models/actions/index";
import {
  isAuthorizedSelector,
  userNameSelector,
  searchLineTextSelector,
  isModalSelector
} from "models/selectors/index";

import App from "./App/App";
import { connect } from "react-redux";

const AppContainer = ({
  isAuthorized,
  userName,
  isModal,
  actions,
  searchLineText
}) => {
  return (
    <Router>
      <App
        isModal={isModal}
        isAuthorized={isAuthorized}
        userName={userName}
        actions={actions}
        searchLineText={searchLineText}
      />
    </Router>
  );
};

const mapStateToProps = state => ({
  isModal: isModalSelector(state),
  isAuthorized: isAuthorizedSelector(state),
  userName: userNameSelector(state),
  searchLineText: searchLineTextSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
