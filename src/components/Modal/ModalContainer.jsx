import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from 'models/actions/index';
import {
  userSelector,
  idTestSelector,
  currentEditSelector,
  isQuestionEditSelector,
  testResultSelector,
  questionIdSelector,
  modalTypeSelector
} from 'models/selectors/index';
import Modal from './Modal/Modal';

const ModalContainer = ({
  users,
  actions,
  idTest,
  questionId,
  currentEdit,
  isQuestionEdit,
  testResult,
  modalType,
}) => (
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

const mapStateToProps = (state) => ({
  users: userSelector(state),
  idTest: idTestSelector(state),
  questionId: questionIdSelector(state),
  currentEdit: currentEditSelector(state),
  isQuestionEdit: isQuestionEditSelector(state),
  testResult: testResultSelector(state),
  modalType: modalTypeSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(action, dispatch),
});

ModalContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  testResult: PropTypes.number.isRequired,
  isQuestionEdit: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  currentEdit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  idTest: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  questionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
