import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton/FormButton';
import style from './Confirmation.module.scss';

class Confirmation extends PureComponent {
  handleClickYes = () => {
    const {
      idTest, actions, questionId, currentEdit,
    } = this.props;
    if (currentEdit === 'test') {
      actions.removeTestAction(idTest);
    }
    if (currentEdit === 'question') {
      actions.removeQuestionAction(idTest, questionId);
    }
  };

  handleClickNo = () => {
    const { actions } = this.props;
    actions.closeModalAction();
  };

  render() {
    return (
      <div className={style.confirmation}>
        <h2 className={style.title}>
          Add You Sure?
        </h2>
        <FormButton click={this.handleClickYes} text="Yes" />
        <FormButton click={this.handleClickNo} text="No" color="red" />
      </div>
    );
  }
};

Confirmation.propTypes = {
  actions: PropTypes.object.isRequired,
  idTest: PropTypes.number,
  questionId: PropTypes.number,
  currentEdit: PropTypes.string.isRequired,
};

export default Confirmation;
