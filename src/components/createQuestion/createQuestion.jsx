import React from "react";
import "./createQuestion.scss";

const CreateQuestion = ({actions, testId}) => {

  const handlClick = () => {
    actions.modalAddQuestionAction(testId);
  }
  return (
    <div className='create-question'>
      <button onClick={handlClick}>Add New Question</button>
      <button>Start Test</button>
    </div>
  );
};

export default CreateQuestion;
