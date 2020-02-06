import React from 'react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton/FormButton';
import style from './Confirmation.module.scss';

const Confirmation = ({
  actions, idTest, questionId, currentEdit,
}) => {
  const handleClickYes = () => {
    if (currentEdit === 'test') {
      actions.removeTestAction(idTest);
    }
    if (currentEdit === 'question') {
      actions.removeQuestionAction(idTest, questionId);
    }
  };

  const handleClickNo = () => {
    actions.closeModalAction();
  };

  return (
    <div className={style.confirmation}>
      <h2 className={style.title}>
        Add You Sure?
      </h2>
      <FormButton click={handleClickYes} text="Yes" />
      <FormButton click={handleClickNo} text="No" color="red" />
    </div>
  );
};
Confirmation.propTypes = {
  actions: PropTypes.object.isRequired,
  idTest: PropTypes.number,
  questionId: PropTypes.number,
  currentEdit: PropTypes.string.isRequired,
};

export default Confirmation;
