import React from "react";
import style from "./CreateQuestion.module.scss";

import GreenButton from 'components/GreenButton/GreenButton'
import RedButton from 'components/RedButton/RedButton'

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
      <RedButton click={handlClickStopTest} text={'Stop Testing'} />
    </div> :
    isAdmin &&  <div className={style.createQuestion}>
      <GreenButton click={handlClick} text = {'Add New Question'} />
      <GreenButton click={handlClickStartTest} text = {'Start Test'} />
    </div>
  );
};

export default CreateQuestion;
