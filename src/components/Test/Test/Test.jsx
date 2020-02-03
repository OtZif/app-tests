import React, { Component } from "react";

import style from "./Test.module.scss";
import SvgX from "components/SvgX/SvgX";
import CreateQuestion from "components/CreateQuestion/CreateQuestion";
import { ENTER_KEY } from "models/constants/index";

class Test extends Component {
  state = {
    currentAnswersArray: [],
    currectAnswersCount: 0
  };
  handleDeleteQuestion = (testId, questionId) => () => {
    const { actions } = this.props;
    const text = "Confirmation";
    actions.openModalAction(text, testId, "question", questionId);
  };
  handleChangeCurrentField = (id, title) => e => {
    const { actions } = this.props;
    if (e.target.value.trim() === "") e.target.value = title;
    actions.saveTestNameAction(id, e.target.value);
  };

  handleKeyUp = (id, title) => e => {
    const { actions } = this.props;
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") e.target.value = title;
      actions.saveTestNameAction(id, e.target.value);
    }
  };

  handleEditTestTitle = (text, id) => {
    const { actions, isAdmin } = this.props;
    if (isAdmin) {
      return () => actions.editTestNameAction(text, id);
    }
  };

  handleClickToEditQuestion = id => () => {
    const { actions } = this.props;
    const text = "AddQuestion";
    actions.editingQuestionAction(text, id);
  };

  handleCheckAnswer = (questionId, ansId) => e => {
    const { questions, isTesting } = this.props;

    if (isTesting) {
      let x = [...questions].filter(el => el.id === questionId).shift();
      let y = x.answers.filter(el => el.id === ansId).shift();
      y.answer = e.target.value;
      let c = {
        id: questionId,
        type: x.answerType,
        ans: [y]
      };

      if (this.state.currentAnswersArray.length === 0) {
        this.setState({
          currentAnswersArray: this.state.currentAnswersArray.concat(c)
        });
      }

      if (this.state.currentAnswersArray.length > 0) {
        if (this.state.currentAnswersArray.every(ar => ar.id !== questionId)) {
          this.setState(state => {
            const currentAnswersArray = state.currentAnswersArray.concat(c);
            return {
              currentAnswersArray
            };
          });
        } else {
          this.setState({
            currentAnswersArray: this.state.currentAnswersArray.map(el => {
              if (el.id === questionId) {
                return {
                  ...el,
                  ans: [y]
                };
              }
              return el;
            })
          });
        }
      }
    }
  };

  handleRadioAnswer = (id, ansId) => () => {
    const { questions, isTesting } = this.props;

    if (isTesting) {
      let x = questions.filter(el => el.id === id).shift();
      let y = x.answers.filter(el => el.id === ansId);
      let c = {
        id: id,
        type: x.answerType,
        ans: y
      };

      if (this.state.currentAnswersArray.length === 0) {
        this.setState({
          currentAnswersArray: this.state.currentAnswersArray.concat(c)
        });
      }

      if (this.state.currentAnswersArray.length > 0) {
        this.state.currentAnswersArray.map(el => {
          if (el.id === id) {
            this.setState({
              currentAnswersArray: this.state.currentAnswersArray.map(ele => {
                if (ele.id === id) {
                  return {
                    ...ele,
                    ans: y
                  };
                }
                return ele;
              })
            });
          }

          if (
            this.state.currentAnswersArray.every(ar => ar.id !== id) &&
            el.id !== id
          ) {
            this.setState({
              currentAnswersArray: this.state.currentAnswersArray.concat(c)
            });
          }

          return el;
        });
      }
    }
  };

  handleCheckboxAnswer = (id, ansId) => e => {
    const { questions, isTesting } = this.props;
    if (isTesting) {
      const { currentAnswersArray } = this.state;
      let x = [...questions].filter(el => el.id === id).shift();
      let y = x.answers.filter(el => el.id === ansId);
      let c = {};

      if (this.state.currentAnswersArray.length === 0) {
        c = {
          id: id,
          type: x.answerType,
          ans: y
        };
        this.setState({
          currentAnswersArray: this.state.currentAnswersArray.concat(c)
        });
      }

      if (this.state.currentAnswersArray.length > 0) {
        if (e.target.checked === true) {
          if (this.state.currentAnswersArray.every(ar => ar.id !== id)) {
            c = {
              id: id,
              type: x.answerType,
              ans: y
            };
            this.setState({
              currentAnswersArray: currentAnswersArray.concat(c)
            });
          } else {
            let z = y.shift();
            this.setState({
              currentAnswersArray: this.state.currentAnswersArray.map(item => {
                if (item.id === id) {
                  item.ans.push(z);
                }
                return item;
              })
            });
          }
        } else {
          this.setState({
            currentAnswersArray: currentAnswersArray.map(el => {
              if (el.id === id) {
                return {
                  ...el,
                  ans: el.ans.filter(ans => ans.id !== ansId)
                };
              }

              return el;
            })
          });
        }
      }
    }
  };

  componentDidMount() {
    const { actions, testId, tests } = this.props;
    actions.fetchTestQuestionAction(testId);
    if (tests.length === 0) {
      actions.fetchTestsAction();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { modalType, questions, actions } = this.props;

    if (modalType === "Calculation") {
      if (modalType !== prevProps.modalType) {
        let clearArray = this.state.currentAnswersArray.filter(
          el => el.ans.length !== 0
        );
        clearArray.map(el => {
          if (el.type === "Single") {
            el.ans.map(ans => {
              if (ans.currect === true) {
                this.setState(state => {
                  const currectAnswersCount = state.currectAnswersCount + 1;
                  return {
                    currectAnswersCount
                  };
                });
              }
              return ans;
            });
          }
          if (el.type === "Some") {
            let z = questions.filter(ques => ques.id === el.id).shift();
            let y = z.answers.filter(answ => answ.currect === true).length;

            el.ans.map(ans => {
              if (ans.currect === true) {
                this.setState(state => {
                  const currectAnswersCount = state.currectAnswersCount + 1 / y;
                  return {
                    currectAnswersCount
                  };
                });
              }
              return ans;
            });
          }
          if (el.type === "Numeric") {
            el.ans.map(ans => {
              if (ans.answer === ans.currect) {
                this.setState(state => {
                  const currectAnswersCount = state.currectAnswersCount + 1;
                  return {
                    currectAnswersCount
                  };
                });
              }
              return ans;
            });
          }
          return el;
        });
      }
      if (this.state.currectAnswersCount !== prevState.currectAnswersCount) {
        const questionLen = questions.length;

        let res = Math.round(
          (this.state.currectAnswersCount * 100) / questionLen
        );
        actions.testResultAction(res);
      }
    }
  }

  render() {
    const {
      currentEdit,
      testId,
      actions,
      tests,
      questions,
      isAdmin,
      isTesting
    } = this.props;
    return (
      <div className={style.test}>
        <div className={style.testBody}>
          {tests.map(elem => {
            if (elem.id === testId) {
              return currentEdit.id === testId &&
                currentEdit.text === "title" ? (
                <input
                  className={style.editInput}
                  autoFocus
                  defaultValue={elem.testTitle}
                  onKeyUp={this.handleKeyUp(testId, elem.testTitle)}
                  onBlur={this.handleChangeCurrentField(testId, elem.testTitle)}
                />
              ) : (
                <h2
                  key={+new Date() * Math.random(100)}
                  className={style.testTitle}
                  title="double click to edit"
                  onDoubleClick={this.handleEditTestTitle("title", testId)}
                >
                  {elem.testTitle}
                </h2>
              );
            }
            return null;
          })}

          {questions.map(el => (
            <div className={style.question} key={el.id}>
              <h3 className={style.questionTitle}>{el.question}</h3>
              <div className={style.questionAnswers}>
                {el.answers &&
                  el.answerType === "Single" &&
                  el.answers.map(ans => (
                    <div className={style.answersBox} key={ans.id}>
                      <div className={style.checkIndicator}>
                        <input
                          type="radio"
                          className={style.radio}
                          name={el.id}
                          id={ans.id}
                          onChange={this.handleRadioAnswer(el.id, ans.id)}
                        />
                        <label htmlFor={ans.id}></label>
                      </div>
                      <label className={style.text} htmlFor={ans.id}>
                        {ans.answer}
                      </label>
                    </div>
                  ))}

                {el.answers &&
                  el.answerType === "Some" &&
                  el.answers.map(ans => (
                    <div className={style.answersBox} key={ans.id}>
                      <div className={style.checkIndicator}>
                        <input
                          type="checkbox"
                          className={style.checkbox}
                          id={ans.id}
                          onChange={this.handleCheckboxAnswer(el.id, ans.id)}
                        />
                        <label htmlFor={ans.id}></label>
                      </div>
                      <label className={style.text} htmlFor={ans.id}>
                        {ans.answer}
                      </label>
                    </div>
                  ))}

                {el.answers &&
                  el.answerType === "Numeric" &&
                  el.answers.map(ans => (
                    <div className={style.answersBox} key={ans.id}>
                      <input
                        type="number"
                        id={ans.id}
                        placeholder="type answer"
                        onChange={this.handleCheckAnswer(el.id, ans.id)}
                      />
                    </div>
                  ))}
              </div>
              {isAdmin && (
                <div className={style.adminTools}>
                  <button
                    className={style.edit}
                    onClick={this.handleClickToEditQuestion(el.id)}
                  />
                  <button
                    className={style.remove}
                    onClick={this.handleDeleteQuestion(testId, el.id)}
                  >
                    <SvgX key={+new Date() * Math.random(100)} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={style.testControls}>
          <CreateQuestion
            actions={actions}
            testId={testId}
            isTesting={isTesting}
            isAdmin={isAdmin}
          />
        </div>
      </div>
    );
  }
}

export default Test;
