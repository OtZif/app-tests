import React from 'react';
import PropTypes from 'prop-types';
import Autorisation from 'components/Modal/Autorisation/Autorisation';
import TestTitle from 'components/Modal/TestTitle/TestTitle';
import { ESC_KEY } from 'models/constants/index';
import SvgX from 'components/SvgX/SvgX';
import AddQuestion from 'components/Modal/AddQuestion/AddQuestion';
import TestResults from 'components/Modal/TestResult/TestResult';
import Confirmation from 'components/Modal/Confirmation/Confirmation';
import style from './Modal.module.scss';

const Modal = ({
  actions,
  users,
  currentEdit,
  idTest,
  questionId,
  isQuestionEdit,
  testResult,
  modalType,
}) => {
  const handleCloseClick = () => {
    actions.closeModalAction();
  };
  const handleCloseKeyUp = (e) => {
    if (e.keyCode === ESC_KEY) {
      actions.closeModalAction();
    }
  };

  const element = (text) => {
    switch (text) {
      case 'Autorisation':
        return <Autorisation users={users} actions={actions} />;

      case 'AddingTestTitle':
        return <TestTitle actions={actions} />;
      case 'AddQuestion':
        return (
          <AddQuestion
            actions={actions}
            idTest={idTest}
            isQuestionEdit={isQuestionEdit}
            currentEdit={currentEdit}
          />
        );

      case 'Calculation':
        return <TestResults actions={actions} testResult={testResult} />;

      case 'Confirmation':
        return (
          <Confirmation
            actions={actions}
            idTest={idTest}
            questionId={questionId}
            currentEdit={currentEdit}
          />
        );

      default:
        break;
    }
    return text;
  };

  return (
    <div className={style.modal} onKeyUp={handleCloseKeyUp} tabIndex="-1" role="button">
      <div className={style.modalBg} onClick={handleCloseClick} />
      <div className={style.modalInfo}>
        <div className={style.modalContent}>
          <button className={style.modalClose} onClick={handleCloseClick} type="button">
            <SvgX />
          </button>
          <div className={style.modalBody}>{element(modalType)}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  currentEdit: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  idTest: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  questionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  isQuestionEdit: PropTypes.bool.isRequired,
  testResult: PropTypes.number.isRequired,
  modalType: PropTypes.string.isRequired,
};

export default Modal;
