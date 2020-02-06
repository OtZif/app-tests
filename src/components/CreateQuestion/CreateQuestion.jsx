import React from 'react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton/FormButton';
import style from './CreateQuestion.module.scss';

const CreateQuestion = ({
  actions, testId, isTesting, isAdmin,
}) => {
  const handlClick = () => {
    const text = 'AddQuestion';
    actions.openModalAction(text, testId);
  };

  const handlClickStartTest = () => {
    actions.startTestingAction();
  };

  const handlClickStopTest = () => {
    actions.openModalAction('Calculation');
  };

  return (
    isTesting ? (
      <div className={style.createQuestion}>
        <FormButton click={handlClickStopTest} text="Stop Testing" color="red" />
      </div>
    )
      : isAdmin && (
      <div className={style.createQuestion}>
        <FormButton click={handlClick} text="Add New Question" />
        <FormButton click={handlClickStartTest} text="Start Test" />
      </div>
      )
  );
};

CreateQuestion.propTypes = {
  actions: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
  isTesting: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default CreateQuestion;
