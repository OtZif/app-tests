import React from "react";
import { bindActionCreators } from "redux";

import Modal from './Modal/Modal'
import * as action from "models/actions/index";

import {
  userSelector,
  idTestSelector,
  currentEditSelector,
  isQuestionEditSelector,
  testResultSelector,
  questionIdSelector,

  modalTypeSelector
} from "models/selectors/index";

import { connect } from "react-redux";

const ModalContainer = ({
  users,
  actions,
  idTest,
  questionId,
  currentEdit,
  isQuestionEdit,
  testResult,

  modalType
}) => {
  return (
    <Modal
    actions={actions}
    users={users}
    idTest={idTest}
    questionId={questionId}
    currentEdit={currentEdit}
    isQuestionEdit={isQuestionEdit}
    testResult={testResult}
    modalType={modalType}
  />
  );
};

const mapStateToProps = state => ({
  users: userSelector(state),
  idTest: idTestSelector(state),
  questionId: questionIdSelector(state),
  currentEdit: currentEditSelector(state),
  isQuestionEdit: isQuestionEditSelector(state),
  testResult: testResultSelector(state),
  modalType: modalTypeSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
