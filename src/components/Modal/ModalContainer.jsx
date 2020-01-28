import React from "react";
import { bindActionCreators } from "redux";

import Modal from './Modal/Modal'
import * as action from "../../actions/index";

import {
  autorisationSelector,
  addTitleSelector,
  userSelector,
  modalAddQuestionSelector,
  idTestSelector,
  currentEditSelector,
  isQuestionEditSelector,
  isCalculationSelector,
  testResultSelector
} from "../../selectors/index";

import { connect } from "react-redux";

const ModalContainer = ({
  users,
  actions,
  autorisation,
  addTitle,
  modalAddQuestion,
  idTest,
  currentEdit,
  isQuestionEdit,
  isCalculation,
  testResult
}) => {
  return (
    <Modal
    actions={actions}
    users={users}
    autorisation={autorisation}
    addTitle={addTitle}
    modalAddQuestion={modalAddQuestion}
    idTest={idTest}
    currentEdit={currentEdit}
    isQuestionEdit={isQuestionEdit}
    isCalculation={isCalculation}
    testResult={testResult}
  />
  );
};

const mapStateToProps = state => ({
  users: userSelector(state),
  autorisation: autorisationSelector(state),
  addTitle: addTitleSelector(state),
  modalAddQuestion: modalAddQuestionSelector(state),
  idTest: idTestSelector(state),
  currentEdit: currentEditSelector(state),
  isQuestionEdit: isQuestionEditSelector(state),
  isCalculation: isCalculationSelector(state),
  testResult: testResultSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
