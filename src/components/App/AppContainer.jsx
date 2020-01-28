import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as action from "../../actions/index";
import {
  isAuthorizedSelector,
  userNameSelector,
  filterTrackSelector,
  isModalSelector
} from "../../selectors/index";

import App from "./App/App";
import { connect } from "react-redux";

const AppContainer = ({
  isAuthorized,
  userName,
  isModal,
  actions,
  filterTrack
}) => {
  return (
    <Router>
      <App
        isModal={isModal}
        isAuthorized={isAuthorized}
        userName={userName}
        actions={actions}
        filterTrack={filterTrack}
      />
    </Router>
  );
};

const mapStateToProps = state => ({
  isModal: isModalSelector(state),
  isAuthorized: isAuthorizedSelector(state),
  userName: userNameSelector(state),
  filterTrack: filterTrackSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
