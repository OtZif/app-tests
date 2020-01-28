import React from "react";

import "./modal.scss";
import Autorisation from "../Autorisation/Autorisation";
import TestTitle from "../TestTitle/TestTitle";
import { ESC_KEY } from "../../../constants/index";
import SvgX from "../../SvgX/SvgX";
import AddQuestion from "../AddQuestion/AddQuestion";
import TestResults from "../TestResult/TestResult";
import Confirmation from "../Confirmation/Confirmation";

const Modal = ({
  actions,
  users,
  autorisation,
  isAddingTitle,
  currentEdit,
  isModalAddQuestion,
  idTest,
  questionId,
  isQuestionEdit,
  isCalculation,
  isRemoving,
  testResult
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
    <div className="modal" onKeyUp={handleCloseKeyUp} tabIndex="-1">
      <div className="modal--bg" onClick={handleClose}></div>
      <div className="modal--info">
        <div className="modal--content">
          <button className="modal--close" onClick={handleClose}>
            <SvgX />
          </button>
          <div className="modal--body">
            {autorisation && <Autorisation users={users} actions={actions} />}
            {isAddingTitle && <TestTitle actions={actions} />}
            {isModalAddQuestion && (
              <AddQuestion
                actions={actions}
                idTest={idTest}
                isQuestionEdit={isQuestionEdit}
                currentEdit={currentEdit}
              />
            )}
            {isCalculation && (
              <TestResults actions={actions} testResult={testResult} />
            )}
            {isRemoving && (
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
