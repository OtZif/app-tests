import React from "react";

const Confirmation = ({ actions, idTest, questionId, currentEdit }) => {
  const handlClickYes = () => {
    console.log(currentEdit);
    if (currentEdit === "test") {
      actions.removeTestAction(idTest);
    }
    if (currentEdit === "question") {
      actions.removeQuestionAction(idTest, questionId);
    }
  };

  const handlClickNo = () => {
    actions.closeModalAction();
  };

  return (
    <div className="testTitle">
      <h2 className="title" autoFocus>
        Add You Sure?
      </h2>

      <button onClick={handlClickYes} className="modal--button">
        Yes
      </button>
      <button
        onClick={handlClickNo}
        className=" modal--button modal--button__red"
      >
        No
      </button>
    </div>
  );
};

export default Confirmation;
