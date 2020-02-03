import React from "react";
import { bindActionCreators } from "redux";
import * as action from "models/actions/index";
import {
  isAuthorizedSelector,
  userNameSelector,
  searchLineTextSelector,
} from "models/selectors/index";

import Header from './Header/Header';
import { connect } from "react-redux";

const HeaderContainer = ({
  isAuthorized,
  userName,
  actions,
  searchLineText
}) => {
  return (
    <Header
      actions={actions}
      userName={userName}
      isAuthorized={isAuthorized}
      searchLineText={searchLineText}
    />
  );
};

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
  userName: userNameSelector(state),
  searchLineText: searchLineTextSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
