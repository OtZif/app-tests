import React from "react";
import { bindActionCreators } from "redux";
import * as action from "models/actions/index";
import {
  isAdminSelector,
  isFilteredSelector,
  currentEditSelector,
  questionsSelector,
  isTestingSelector,
  modalTypeSelector
} from "models/selectors/index";

import Test from "./Test/Test";
import { connect } from "react-redux";

const TestContainer = ({
  isAdmin,
  isTesting,
  tests,
  actions,
  testId,
  currentEdit,
  questions,
  modalType
}) => {
  return (
    <Test
      tests={tests}
      testId={testId}
      isAdmin={isAdmin}
      isTesting={isTesting}
      actions={actions}
      currentEdit={currentEdit}
      questions={questions}
      modalType={modalType}
    />
  );
};

const mapStateToProps = state => ({
  tests: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
  currentEdit: currentEditSelector(state),
  questions: questionsSelector(state),
  isTesting: isTestingSelector(state),
  modalType: modalTypeSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
