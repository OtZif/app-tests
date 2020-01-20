import React from "react";

import "./modal.scss";
import Autorisation from "../autorisation/autorisation";
import TestTitle from "../addTestTitle/addTestTitle";
import { ESC_KEY } from "../../constants/otherConstants";
import SvgX from "../svgX/svgX";
import AddQuestion from "../addQuestion/addQuestion";

const Modal = ({
  actions,
  users,
  autorisation,
  addTitle,
  currentEdit,
  modalAddQuestion,
  idTest,
  questionEdit
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
                questionEdit={questionEdit}
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
