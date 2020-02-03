import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as actions from "models/actions/index";
import {
  isAuthorizedSelector,
  isModalSelector
} from "models/selectors/index";

import App from "./App/App";
import { connect } from "react-redux";

const AppContainer = ({
  isAuthorized,
  isModal,
  openModal,
}) => {
  return (
    <Router>
      <App
        isModal={isModal}
        isAuthorized={isAuthorized}
        openModal={openModal}
      />
    </Router>
  );
};

const mapStateToProps = state => ({
  isModal: isModalSelector(state),
  isAuthorized: isAuthorizedSelector(state),
});
const {openModalAction} = actions;
const mapDispatchToProps = dispatch => ({
  openModal: bindActionCreators(openModalAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
