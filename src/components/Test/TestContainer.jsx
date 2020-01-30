import React from "react";
import { bindActionCreators } from "redux";
import * as action from "models/actions/index";
import {
  isAdminSelector,
  isFilteredSelector,
  currentEditSelector,
  questionsSelector,
  isTestingSelector,
  isCalculationSelector
} from "models/selectors/index";

import Test from "./Test/Test";
import { connect } from "react-redux";

const TestContainer = ({
  isAdmin,
  isTesting,
  test,
  actions,
  testId,
  currentEdit,
  questions,
  isCalculation
}) => {
  return (
    <Test
      test={test}
      testId={testId}
      isAdmin={isAdmin}
      isTesting={isTesting}
      actions={actions}
      currentEdit={currentEdit}
      questions={questions}
      isCalculation={isCalculation}
    />
  );
};

const mapStateToProps = state => ({
  test: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
  currentEdit: currentEditSelector(state),
  questions: questionsSelector(state),
  isTesting: isTestingSelector(state),
  isCalculation: isCalculationSelector(state)

});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
