import React from "react";
import { bindActionCreators } from "redux";
import * as action from "actions/index";
import {
  isFilteredSelector,
  isAdminSelector,
  filterSelector,
} from "selectors/index";

import Tests from "./Tests/Tests";
import { connect } from "react-redux";

const TestsContainer = ({
  test,
  isAdmin,
  isFiltered,
  actions,
}) => {
  return (
    <Tests test={test} isAdmin={isAdmin} isFiltered={isFiltered} actions={actions} />
  );
};

const mapStateToProps = state => ({
  test: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
  isFiltered: filterSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer);
