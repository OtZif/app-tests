import React from "react";

import "./modal.scss";
import Autorisation from "../autorisation/autorisation"
import TestTitle from '../addTestTitle/addTestTitle'
import {ESC_KEY} from '../../constants/otherConstants'
import SvgX from "../svgX/svgX";
import AddQuestion from '../addQuestion/addQuestion'

const Modal = ({ actions, users, autorisation, addTitle, addQuestion, modalAddQuestion, idTest }) => {
  const handleClose = () => {
    actions.closeModal();
  };
  const handleCloseKeyUp = e => {
    if (e.keyCode === ESC_KEY) {
      actions.closeModal();
    }
  };
  return (
    <div className="modal" onKeyUp={handleCloseKeyUp} tabIndex="-1">
      <div className="modal--bg" onClick={handleClose}></div>
      <div className="modal--info">
        <div className="modal--content">
          <div className="modal--header">
            {/* <h3>{addTitle && "Add Test Title"} </h3> */}
            <button className="modal--close" onClick={handleClose} >
              <SvgX />
            </button>
          </div>
          <div className="modal--body">
            {autorisation && <Autorisation users={users} actions={actions} />}
            {addTitle && <TestTitle actions={actions} />}
            {modalAddQuestion && <AddQuestion actions={actions} idTest={idTest}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
