import React from "react";
import style from "./Modal.module.scss";
import Autorisation from "components/Modal/Autorisation/Autorisation";
import TestTitle from "components/Modal/TestTitle/TestTitle";
import { ESC_KEY } from "models/constants/index";
import SvgX from "components/SvgX/SvgX";
import AddQuestion from "components/Modal/AddQuestion/AddQuestion";
import TestResults from "components/Modal/TestResult/TestResult";
import Confirmation from "components/Modal/Confirmation/Confirmation";

const Modal = ({
  actions,
  users,
  currentEdit,
  idTest,
  questionId,
  isQuestionEdit,
  testResult,
  modalType
}) => {
  const handleCloseClick = () => {
    actions.closeModalAction();
  };
  const handleCloseKeyUp = e => {
    if (e.keyCode === ESC_KEY) {
      actions.closeModalAction();
    }
  };

  const element = text => {
    switch (text) {
      case "Autorisation":
        return <Autorisation users={users} actions={actions} />;

      case "AddingTestTitle":
        return <TestTitle actions={actions} />;
      case "AddQuestion":
        return (
          <AddQuestion
            actions={actions}
            idTest={idTest}
            isQuestionEdit={isQuestionEdit}
            currentEdit={currentEdit}
          />
        );

      case "Calculation":
        return <TestResults actions={actions} testResult={testResult} />;

      case "Confirmation":
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
  };

  return (
    <div className={style.modal} onKeyUp={handleCloseKeyUp} tabIndex="-1">
      <div className={style.modalBg} onClick={handleCloseClick}></div>
      <div className={style.modalInfo}>
        <div className={style.modalContent}>
          <button className={style.modalClose} onClick={handleCloseClick}>
            <SvgX />
          </button>
          <div className={style.modalBody}>{element(modalType)}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
