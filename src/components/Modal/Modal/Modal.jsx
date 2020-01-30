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
  const handleClose = () => {
    actions.closeModalAction();
  };
  const handleCloseKeyUp = e => {
    if (e.keyCode === ESC_KEY) {
      actions.closeModalAction();
    }
  };
  return (
    <div className={style.modal} onKeyUp={handleCloseKeyUp} tabIndex="-1">
      <div className={style.modalBg} onClick={handleClose}></div>
      <div className={style.modalInfo}>
        <div className={style.modalContent}>
          <button className={style.modalClose} onClick={handleClose}>
            <SvgX />
          </button>
          <div className={style.modalBody}>
            {modalType === "Autorisation" && (
              <Autorisation users={users} actions={actions} />
            )}
            {modalType === "AddingTestTitle" && <TestTitle actions={actions} />}
            {modalType === "AddQuestion" && (
              <AddQuestion
                actions={actions}
                idTest={idTest}
                isQuestionEdit={isQuestionEdit}
                currentEdit={currentEdit}
              />
            )}
            {modalType === "Calculation" && (
              <TestResults actions={actions} testResult={testResult} />
            )}
            {modalType === "Confirmation" && (
              <Confirmation
                actions={actions}
                idTest={idTest}
                questionId={questionId}
                currentEdit={currentEdit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
