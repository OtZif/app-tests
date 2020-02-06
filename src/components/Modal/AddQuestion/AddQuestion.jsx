import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answers from 'components/Answers/Answers';
import FormButton from 'components/FormButton/FormButton';
import style from './AddQuestion.module.scss';

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      answerType: 'Choose Type',
      question: '',
      answers: {},
    };
  }

  componentDidMount() {
    const { isQuestionEdit, currentEdit } = this.props;
    if (isQuestionEdit) {
      this.setState({
        answerType: currentEdit.answerType,
        question: currentEdit.question,
        answers: currentEdit.answers,
      });
    }
  }

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  handleCloseModal = () => {
    const { actions } = this.props;
    actions.closeModalAction();
  };

  handleChoseQuestionType = (text) => () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
      answerType: text,
    });
  };

  handleTypeQuestion = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

  updateAnswers = (data) => {
    this.setState({
      answers: data,
    });
  };

  render() {
    const {
      answerType, question, answers, isOpen,
    } = this.state;
    const {
      actions, idTest, isQuestionEdit, currentEdit,
    } = this.props;

    return (
      <form
        action=""
        className={style.addQuestion}
        onSubmit={(event) => {
          if (question !== '') {
            const isTrue = answers.filter((el) => el.currect === true).length;
            const isAns = answers.filter((el) => el.currect !== '').length;
            if (
              (answers.length >= 2 && answerType !== 'Numeric' && isTrue > 0)
              || (answerType === 'Numeric' && isAns > 0)
            ) {
              if (isQuestionEdit) {
                actions.editQuestionsServAction(
                  currentEdit.testsId,
                  currentEdit.id,
                  question,
                  answerType,
                  answers,
                );
              } else {
                actions.addQuestionAction(
                  idTest,
                  question,
                  answerType,
                  answers,
                );
              }
            }
          }
          event.preventDefault();
        }}
      >
        <h2 className={style.title}>
          {isQuestionEdit ? 'Edit Question' : 'Add New Question'}
        </h2>
        <p className={style.description}>Chose type of question</p>
        <div
          className={`${style.dropdown} ${
            isOpen ? style.dropdownIsOpen : ''
          }`}
        >
          <div className={style.dropdownButtonBox}>
            <div className={style.arrow} />
            <button
              type="button"
              className={style.dropdownButton}
              onClick={this.handleClick}
            >
              {answerType}
            </button>
          </div>
          <div className={style.dropdownContent}>
            <div className={style.buttonBox}>
              <button
                type="button"
                onClick={this.handleChoseQuestionType('Single')}
              >
                Single
              </button>
              <button
                type="button"
                onClick={this.handleChoseQuestionType('Some')}
              >
                Some
              </button>
              <button
                type="button"
                onClick={this.handleChoseQuestionType('Numeric')}
              >
                Numeric
              </button>
            </div>
          </div>
        </div>

        {(answerType === 'Single'
        || answerType === 'Some'
          || answerType === 'Numeric') && (
          <input
            type="text"
            placeholder="Type question"
            onChange={this.handleTypeQuestion}
            defaultValue={question}
          />
        )}

        <Answers
          type={answerType}
          updateAnswers={this.updateAnswers}
          answers={answers}
        />


        <FormButton text="Save" />
        <FormButton
          click={this.handleCloseModal}
          text="Cancel"
          color="red"
        />
      </form>
    );
  }
}

AddQuestion.propTypes = {
  actions: PropTypes.object.isRequired,
  idTest: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  isQuestionEdit: PropTypes.bool.isRequired,
  currentEdit: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default AddQuestion;
