import React from "react";
import { bindActionCreators } from "redux";

import Modal from './Modal/Modal'
import * as action from "models/actions/index";

import {
  isAutorisationSelector,
  isAddingTitleSelector,
  userSelector,
  isModalAddQuestionSelector,
  idTestSelector,
  currentEditSelector,
  isQuestionEditSelector,
  isCalculationSelector,
  testResultSelector,
  isRemovingSelector,
  questionIdSelector
} from "models/selectors/index";

import { connect } from "react-redux";

const ModalContainer = ({
  users,
  actions,
  isAutorisation,
  isAddingTitle,
  isModalAddQuestion,
  idTest,
  questionId,
  currentEdit,
  isQuestionEdit,
  isCalculation,
  isRemoving,
  testResult
}) => {
  return (
    <Modal
    actions={actions}
    users={users}
    isAutorisation={isAutorisation}
    isAddingTitle={isAddingTitle}
    isModalAddQuestion={isModalAddQuestion}
    idTest={idTest}
    questionId={questionId}
    currentEdit={currentEdit}
    isQuestionEdit={isQuestionEdit}
    isCalculation={isCalculation}
    testResult={testResult}
    isRemoving={isRemoving}
  />
  );
};

const mapStateToProps = state => ({
  users: userSelector(state),
  isAutorisation: isAutorisationSelector(state),
  isAddingTitle: isAddingTitleSelector(state),
  isModalAddQuestion: isModalAddQuestionSelector(state),
  idTest: idTestSelector(state),
  questionId: questionIdSelector(state),
  currentEdit: currentEditSelector(state),
  isQuestionEdit: isQuestionEditSelector(state),
  isCalculation: isCalculationSelector(state),
  testResult: testResultSelector(state),
  isRemoving: isRemovingSelector(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
