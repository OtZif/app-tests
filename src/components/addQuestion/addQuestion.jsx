import React, { Component } from "react";
import "./addQuestion.scss";

class AddQuestion extends Component {
  state = {
    isOpen: false,
    questionType: "Question Type",
    answerType: '',
    singleAnswer: false,
    someAnswers: false,
    numericAnswer: false,
    question: "",
    ansValue1: '',
    ansCheck1: false,
    ansValue2: '',
    ansCheck2: false,
    ansValue3: '',
    ansCheck3: false,
    ansValue4: '',
    ansCheck4: false,
    ansValue5: '',
    ansCheck5: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // handleBlur = () => {
  //   if (this.state.isOpen){
  //     this.setState({
  //       isOpen: false
  //     });
  //   }
  // }

  handleCloseModal = () => {
    const { actions } = this.props;
    actions.closeModal();
  };

  handlChoseQuestionType = text => () => {
    this.setState({
      isOpen: false,
      questionType: text
    });
    switch (text) {
      case 'Single':
        // console.log("Single");
        this.setState({
          singleAnswer: true,
          someAnswers: false,
          numericAnswer: false,
          answerType: 'Single',
        });
        break;

      case "Some":
       // console.log("Some");
        this.setState({
          singleAnswer: false,
          someAnswers: true,
          numericAnswer: false,
          answerType: 'Some'
        });
        break;

      case "Numeric":
       // console.log("Numeric");
        this.setState({
          singleAnswer: false,
          someAnswers: false,
          numericAnswer: true,
          answerType: 'Numeric'
        });
        break;

      default:
        break;
    }
  };

  handlTypeQuestion = e => {
    this.setState({
      question: e.target.value
    });
  };

  handlTypeAnswer = text => e => {
    // console.log("text ---- >", text);
    this.setState({
      [text]: e.target.value
    });
  };

  handleCheckCurrect = text => e => {
    this.setState({
      [text]: !this.state[text]
    });
  };

  // componentWillMount() {
  //   const {questionEdit, currentEdit} = this.props;
  //   // const {answerType} = this.state;
  //   // this.handlChoseQuestionType("Single");


  //   if (questionEdit) {
  //     currentEdit.answers.map(el => {
  //       this.setState({
  //         ansValue1: el.answer,
  //         ansCheck1: el.currect
  //       })
  //       console.log('ansVal', el);
  //       return el;
  //     })
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (this.state.isOpen === nextProps.isOpen) {
  //     console.log('doo')
  //     this.handlChoseQuestionType("Single");
  //   }
  // }

  render() {
    const {
      questionType,
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

    // console.log('willMount', currentEdit.answerType, 'hel', answerType)

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
              id: Math.round(
                +new Date() *
                  Math.random()
                    .toString(10)
              ),
              answer: '',
              currect: ansValue1,
            }
          ]
          if (question !== '') {
            if ((singleAnswer || someAnswers) && (
                (ansCheck1 && ansValue1 !== '') ||
                (ansCheck2 && ansValue2 !== '') ||
                (ansCheck3 && ansValue3 !== '') ||
                (ansCheck4 && ansValue4 !== '') ||
                (ansCheck5 && ansValue5 !== '')) && (answers.length > 2)
              ) {
                questionEdit ? actions.saveEditedQuestion()
                :  
                actions.addQuestionAction(idTest, question, answerType, answers);
            }
            if (numericAnswer && ansValue1 !=='') {

              questionEdit ? actions.saveEditedQuestion()
              : 
              actions.addQuestionAction(idTest, question, answerType, numAnswer);
            }
          }
          event.preventDefault();
        }}
      >
        <h2 className="title" autoFocus>
          {questionEdit? 'Edit Question' : 'Add New Question'}
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
              // onBlur={this.handleClick}
            >
              {questionEdit ? currentEdit.answerType : questionType}
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

        {(singleAnswer || someAnswers || numericAnswer) && <input
            type="text"
            placeholder="Type question"
            onChange={this.handlTypeQuestion}
            defaultValue={currentEdit.question}
          />}

          {singleAnswer && (
            <div className="anwers-box">
              <div className="check--box">
                <input
                  name='radio'
                  type="radio"
                  //checked={ansCheck1}
                  onChange={this.handleCheckCurrect("ansCheck1")}
                />
                <input
                  placeholder="Some answer here"
                  onChange={this.handlTypeAnswer("ansValue1")}
                />
              </div>

              <div className="check--box">
                <input
                  name='radio'
                  type="radio"
                  //checked={ansCheck2}
                  onChange={this.handleCheckCurrect("ansCheck2")}
                />
                <input
                  placeholder="Some answer here"
                  // defaultValue={ansValue2}
                  onChange={this.handlTypeAnswer("ansValue2")}
                />
              </div>

              <div className="check--box">
                <input
                  name='radio'
                  type="radio"
                  //checked={ansCheck3}
                  onChange={this.handleCheckCurrect("ansCheck3")}
                />
                <input
                  placeholder="Some answer here"
                  onChange={this.handlTypeAnswer("ansValue3")}
                />
              </div>

              <div className="check--box">
                <input
                  name='radio'
                  type="radio"
                  //checked={ansCheck4}
                  onChange={this.handleCheckCurrect("ansCheck4")}
                />
                <input
                  placeholder="Some answer here"
                  onChange={this.handlTypeAnswer("ansValue4")}
                />
              </div>

              <div className="check--box">
                <input
                  name='radio'
                  type="radio"
                  //checked={ansCheck5}
                  onChange={this.handleCheckCurrect("ansCheck5")}
                />
                <input
                  placeholder="Some answer here"
                  onChange={this.handlTypeAnswer("ansValue5")}
                />
              </div>
            </div>
          )}
          {someAnswers && (
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
                  // defaultValue={ansValue2}
                  onChange={this.handlTypeAnswer("ansValue2")}
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
                />
              </div>
            </div>
          )}
          {numericAnswer && (
            <div className="anwers-box">
              <input
                placeholder="Type currect numeric answer here"
                type="number"
                onChange={this.handlTypeAnswer("ansValue1")}
                // defaultValue = {currentEdit.answers.map(el=>el.currect)}
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
