import React, { Component } from "react";
import style from "./AddQuestion.module.scss";
import Answers from "components/Answers/Answers";
import RedButton from 'components/RedButton/RedButton'
import GreenButton from 'components/GreenButton/GreenButton';

class AddQuestion extends Component {
  state = {
    isOpen: false,
    answerType: "Choose Type",
    question: "",
    answers: ""
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleCloseModal = () => {
    const { actions } = this.props;
    actions.closeModalAction();
  };

  handlChoseQuestionType = text => () => {
    this.setState({
      isOpen: !this.state.isOpen,
      answerType: text
    });
  };

  handlTypeQuestion = e => {
    this.setState({
      question: e.target.value
    });
  };

  updateAnswers = array => {
    this.setState({
      answers: array
    });
  };

  componentDidMount() {
    const { isQuestionEdit, currentEdit } = this.props;
    if (isQuestionEdit) {
      this.setState({
        answerType: currentEdit.answerType,
        question: currentEdit.question,
        answers: currentEdit.answers
      });
    }
  }

  render() {
    const { answerType, question, answers } = this.state;
    const { actions, idTest, isQuestionEdit, currentEdit } = this.props;

    return (
      <form
        action=""
        className={style.addQuestion}
        onSubmit={event => {
          if (question !== "") {
            const isTrue = answers.filter(el => el.currect === true).length;
            const isAns = answers.filter(el => el.currect !== "").length;
            if (
              (answers.length >= 2 && answerType !== "Numeric" && isTrue > 0) ||
              (answerType === "Numeric" && isAns > 0)
            ) {
              isQuestionEdit
                ? actions.editQuestionsServAction(
                    currentEdit.testsId,
                    currentEdit.id,
                    question,
                    answerType,
                    answers
                  )
                : actions.addQuestionAction(
                    idTest,
                    question,
                    answerType,
                    answers
                  );
            }
          }
          event.preventDefault();
        }}
      >
        <h2 className={style.title} autoFocus>
          {isQuestionEdit ? "Edit Question" : "Add New Question"}
        </h2>
        <p className={style.description}>Chose type of question</p>
        <div
          className={`${style.dropdown} ${this.state.isOpen ? style.dropdownIsOpen : ""}`}
        >
          <div className={style.dropdownButtonBox}>
            <div className={style.arrow}></div>
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
                onClick={this.handlChoseQuestionType("Single")}
              >
                Single
              </button>
              <button
                type="button"
                onClick={this.handlChoseQuestionType("Some")}
              >
                Some
              </button>
              <button
                type="button"
                onClick={this.handlChoseQuestionType("Numeric")}
              >
                Numeric
              </button>
            </div>
          </div>
        </div>

        {(answerType === "Single" ||
          answerType === "Some" ||
          answerType === "Numeric") && (
          <input
            type="text"
            placeholder="Type question"
            onChange={this.handlTypeQuestion}
            defaultValue={question}
          />
        )}

        <Answers
          type={this.state.answerType}
          updateAnswers={this.updateAnswers}
          answers={this.state.answers}
        />

        {/* <button className="modal--button" type="submit">
          Save
        </button> */}
        <GreenButton text={'Save'} />
        <RedButton click={this.handleCloseModal} text={'Cancel'} />
      </form>
    );
  }
}

export default AddQuestion;
