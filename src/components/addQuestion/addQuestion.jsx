import React, { Component } from "react";
import "./addQuestion.scss";

class AddQuestion extends Component {
  state = {
    isOpen: false,
    answerType: "Choose Type",
    singleAnswer: false,
    someAnswers: false,
    numericAnswer: false,
    question: "",
    ansValue1: "",
    ansCheck1: false,
    ansValue2: "",
    ansCheck2: false,
    ansValue3: "",
    ansCheck3: false,
    ansValue4: "",
    ansCheck4: false,
    ansValue5: "",
    ansCheck5: false
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

  handlChangeType = text => {
    switch (text) {
      case "Single":
        this.setState({
          singleAnswer: true,
          someAnswers: false,
          numericAnswer: false,
          ansCheck1: false,
          ansCheck2: false,
          ansCheck3: false,
          ansCheck4: false,
          ansCheck5: false
        });
        break;

      case "Some":
        this.setState({
          singleAnswer: false,
          someAnswers: true,
          numericAnswer: false
        });
        break;

      case "Numeric":
        this.setState({
          singleAnswer: false,
          someAnswers: false,
          numericAnswer: true
        });
        break;

      default:
        break;
    }
  };

  handlChoseQuestionType = text => () => {
    this.setState({
      isOpen: !this.state.isOpen,
      answerType: text
    });

    this.handlChangeType(text);
  };

  handlTypeQuestion = e => {
    this.setState({
      question: e.target.value
    });
  };

  handlTypeAnswer = text => e => {
    this.setState({
      [text]: e.target.value
    });
  };

  handleCheckCurrect = text => () => {
    this.setState({
      [text]: !this.state[text]
    });
  };

  handleCheckCurrectRadio = text => e => {
    switch (text) {
      case "ansCheck1":
        this.setState({
          ansCheck1: true,
          ansCheck2: false,
          ansCheck3: false,
          ansCheck4: false,
          ansCheck5: false
        });
        break;

      case "ansCheck2":
        this.setState({
          ansCheck1: false,
          ansCheck2: true,
          ansCheck3: false,
          ansCheck4: false,
          ansCheck5: false
        });
        break;

      case "ansCheck3":
        this.setState({
          ansCheck1: false,
          ansCheck2: false,
          ansCheck3: true,
          ansCheck4: false,
          ansCheck5: false
        });
        break;

      case "ansCheck4":
        this.setState({
          ansCheck1: false,
          ansCheck2: false,
          ansCheck3: false,
          ansCheck4: true,
          ansCheck5: false
        });
        break;

      case "ansCheck5":
        this.setState({
          ansCheck1: false,
          ansCheck2: false,
          ansCheck3: false,
          ansCheck4: false,
          ansCheck5: true
        });
        break;

      default:
        break;
    }
  };

  componentDidMount() {
    const { questionEdit, currentEdit } = this.props;
    if (questionEdit) {
      this.setState({
        answerType: currentEdit.answerType,
        question: currentEdit.question
      });
      this.handlChangeType(currentEdit.answerType);
      for (let i = 0; i < currentEdit.answers.length; i++) {
        this.setState({
          ["ansValue" + (i + 1)]: currentEdit.answers[i].answer,
          ["ansCheck" + (i + 1)]: currentEdit.answers[i].currect
        });
      }
    }
  }

  render() {
    const {
      answerType,
      singleAnswer,
      someAnswers,
      numericAnswer,
      question,
      ansValue1,
      ansValue2,
      ansValue3,
      ansValue4,
      ansValue5,
      ansCheck1,
      ansCheck2,
      ansCheck3,
      ansCheck4,
      ansCheck5
    } = this.state;
    const { actions, idTest, questionEdit, currentEdit } = this.props;

    return (
      <form
        action=""
        className="add-question"
        onSubmit={event => {
          const answers = [
            {
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
                    .substr(2, 9)
              ),
              answer: ansValue1,
              currect: ansCheck1
            },
            {
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
                    .substr(2, 9)
              ),
              answer: ansValue2,
              currect: ansCheck2
            },
            {
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
                    .substr(2, 9)
              ),
              answer: ansValue3,
              currect: ansCheck3
            },
            {
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
                    .substr(2, 9)
              ),
              answer: ansValue4,
              currect: ansCheck4
            },
            {
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
                    .substr(2, 9)
              ),
              answer: ansValue5,
              currect: ansCheck5
            }
          ].filter(el => el.answer);
          const numAnswer = [
            {
              id: Math.round(+new Date() * Math.random().toString(10)),
              answer: "",
              currect: ansValue1
            }
          ];
          if (question !== "") {
            if (
              (singleAnswer || someAnswers) &&
              ((ansCheck1 && ansValue1 !== "") ||
                (ansCheck2 && ansValue2 !== "") ||
                (ansCheck3 && ansValue3 !== "") ||
                (ansCheck4 && ansValue4 !== "") ||
                (ansCheck5 && ansValue5 !== "")) &&
              answers.length > 2
            ) {
              questionEdit
                ? actions.saveEditedQuestionAction(question, answerType, answers)
                : actions.addQuestionAction(
                    idTest,
                    question,
                    answerType,
                    answers
                  );
            }
            if (numericAnswer && ansValue1 !== "") {
              questionEdit
                ? actions.saveEditedQuestionAction(question, answerType, numAnswer)
                : actions.addQuestionAction(
                    idTest,
                    question,
                    answerType,
                    numAnswer
                  );
            }
          }
          event.preventDefault();
        }}
      >
        <h2 className="title" autoFocus>
          {questionEdit ? "Edit Question" : "Add New Question"}
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

        {(singleAnswer || someAnswers || numericAnswer) && (
          <input
            type="text"
            placeholder="Type question"
            onChange={this.handlTypeQuestion}
            defaultValue={question}
          />
        )}

        {(singleAnswer ||
          (singleAnswer && currentEdit.answerType === "Single")) && (
          <div className="anwers-box">
            <div className="check--box">
              <input
                name="radio"
                type="radio"
                checked={ansCheck1}
                onChange={this.handleCheckCurrectRadio("ansCheck1")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue1")}
                defaultValue={ansValue1}
              />
            </div>

            <div className="check--box">
              <input
                name="radio"
                type="radio"
                checked={ansCheck2}
                onChange={this.handleCheckCurrectRadio("ansCheck2")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue2")}
                defaultValue={ansValue2}
              />
            </div>

            <div className="check--box">
              <input
                name="radio"
                type="radio"
                checked={ansCheck3}
                onChange={this.handleCheckCurrectRadio("ansCheck3")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue3")}
                defaultValue={ansValue3}
              />
            </div>

            <div className="check--box">
              <input
                name="radio"
                type="radio"
                checked={ansCheck4}
                onChange={this.handleCheckCurrectRadio("ansCheck4")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue4")}
                defaultValue={ansValue4}
              />
            </div>

            <div className="check--box">
              <input
                name="radio"
                type="radio"
                checked={ansCheck5}
                onChange={this.handleCheckCurrectRadio("ansCheck5")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue5")}
                defaultValue={ansValue5}
              />
            </div>
          </div>
        )}
        {(someAnswers ||
          (someAnswers && currentEdit.answerType === "Some")) && (
          <div className="anwers-box">
            <div className="check--box">
              <input
                type="checkbox"
                checked={ansCheck1}
                onChange={this.handleCheckCurrect("ansCheck1")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue1")}
                defaultValue={ansValue1}
              />
            </div>

            <div className="check--box">
              <input
                type="checkbox"
                checked={ansCheck2}
                onChange={this.handleCheckCurrect("ansCheck2")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue2")}
                defaultValue={ansValue2}
              />
            </div>

            <div className="check--box">
              <input
                type="checkbox"
                checked={ansCheck3}
                onChange={this.handleCheckCurrect("ansCheck3")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue3")}
                defaultValue={ansValue3}
              />
            </div>

            <div className="check--box">
              <input
                type="checkbox"
                checked={ansCheck4}
                onChange={this.handleCheckCurrect("ansCheck4")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue4")}
                defaultValue={ansValue4}
              />
            </div>

            <div className="check--box">
              <input
                type="checkbox"
                checked={ansCheck5}
                onChange={this.handleCheckCurrect("ansCheck5")}
              />
              <input
                placeholder="Some answer here"
                onChange={this.handlTypeAnswer("ansValue5")}
                defaultValue={ansValue5}
              />
            </div>
          </div>
        )}
        {(numericAnswer ||
          (numericAnswer && currentEdit.answerType === "Numeric")) && (
          <div className="anwers-box">
            <input
              placeholder="Type currect numeric answer here"
              type="number"
              onChange={this.handlTypeAnswer("ansValue1")}
              defaultValue={questionEdit ? currentEdit.answers[0].currect : ""}
            />
          </div>
        )}
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
