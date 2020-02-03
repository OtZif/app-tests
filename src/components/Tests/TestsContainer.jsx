import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "models/actions/index";
import {
  isFilteredSelector,
  isAdminSelector,
} from "models/selectors/index";

import Tests from "./Tests/Tests";
import { connect } from "react-redux";

const TestsContainer = ({
  tests,
  isAdmin,
  actions,
}) => {
  return (
    <Tests tests={tests} isAdmin={isAdmin} actions={actions} />
  );
};

const mapStateToProps = state => ({
  tests: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer);
