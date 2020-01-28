import React, { Component } from "react";
import "./addQuestion.scss";
import Answers from "../../Answers/Answers";

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
        className="add-question"
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
        <h2 className="title" autoFocus>
          {isQuestionEdit ? "Edit Question" : "Add New Question"}
        </h2>
        <p className="description">Chose type of question</p>
        <div
          className={`dropdown ${this.state.isOpen ? "dropdown--is_open" : ""}`}
        >
          <div className="dropdown--button-box">
            <div className="arrow"></div>
            <button
              type="button"
              className="dropdown--button"
              onClick={this.handleClick}
            >
              {answerType}
            </button>
          </div>
          <div className="dropdown--content">
            <div className="button--box">
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

        <button className="modal--button" type="submit">
          Save
        </button>
        <button
          className=" modal--button modal--button__red"
          onClick={this.handleCloseModal}
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default AddQuestion;
