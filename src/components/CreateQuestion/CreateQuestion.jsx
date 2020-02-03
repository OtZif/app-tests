import React from "react";
import style from "./CreateQuestion.module.scss";

import FormButton from 'components/FormButton/FormButton'

const CreateQuestion = ({ actions, testId, isTesting, isAdmin }) => {
  const handlClick = () => {
    const text = 'AddQuestion';
    actions.openModalAction(text, testId);
  };

  const handlClickStartTest = () => {
    actions.startTestingAction()
  }

  const handlClickStopTest = () => {
    actions.openModalAction('Calculation')
  } 
  return (
    isTesting ? <div className={style.createQuestion}>
      <FormButton click={handlClickStopTest} text={'Stop Testing'} color={'red'}/>
    </div> :
    isAdmin &&  <div className={style.createQuestion}>
      <FormButton click={handlClick} text = {'Add New Question'} />
      <FormButton click={handlClickStartTest} text = {'Start Test'} />
    </div>
  );
};

export default CreateQuestion;
