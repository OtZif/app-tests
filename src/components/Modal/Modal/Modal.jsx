import React from "react";

import "./modal.scss";
import Autorisation from "../../Autorisation/Autorisation";
import TestTitle from "../../AddTestTitle/AddTestTitle";
import { ESC_KEY } from "../../../constants/index";
import SvgX from "../../SvgX/SvgX";
import AddQuestion from "../../AddQuestion/AddQuestion";
import TestResults from '../../TestResult/TestResult'

const Modal = ({
  actions,
  users,
  autorisation,
  addTitle,
  currentEdit,
  modalAddQuestion,
  idTest,
  isQuestionEdit,
  isCalculation,
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
            {addTitle && <TestTitle actions={actions} />}
            {modalAddQuestion && (
              <AddQuestion
                actions={actions}
                idTest={idTest}
                isQuestionEdit={isQuestionEdit}
                currentEdit={currentEdit}
              />
            )}
            {isCalculation && <TestResults actions={actions} testResult={testResult}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
