import React from "react";
import "./createQuestion.scss";

const CreateQuestion = ({ actions, testId, isTesting, isAdmin }) => {
  const handlClick = () => {
    actions.modalAddQuestionAction(testId);
  };

  const handlClickStartTest = () => {
    actions.startTestingAction()
  }

  const handlClickStopTest = () => {
    actions.finishTestingAction()
  } 
  return (
    isTesting ? <div className="create-question">
      <button onClick={handlClickStopTest} className='red'>Stop Testing</button>
    </div> :
    isAdmin &&  <div className="create-question">
      <button onClick={handlClick}>Add New Question</button>
      <button onClick={handlClickStartTest}>Start Test</button>
    </div>
  );
};

export default CreateQuestion;
