import React, { Component } from "react";

import "./test.scss";
import SvgX from "../../SvgX/SvgX";
import CreateQuestion from "../../CreateQuestion/CreateQuestion";
import { ENTER_KEY } from "../../../constants/index";

class Test extends Component {
  state = {
    array: [],
    value: 0
  };
  handleDeleteQuestion = (testId, questionId) => () => {
    const { actions } = this.props;
    actions.openConfirmationAction("question", testId, questionId);
  };
  handleChangeCurrentField = (id, title) => e => {
    const { actions } = this.props;
    if (e.target.value.trim() === "") e.target.value = title;
    actions.saveTestNameAction(id, e.target.value);
  };

  handlKeyUp = (id, title) => e => {
    const { actions } = this.props;
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") e.target.value = title;
      actions.saveTestNameAction(id, e.target.value);
    }
  };

  handlEditTestTitle = id => {
    const { actions, isAdmin } = this.props;
    if (isAdmin) {
      return () => actions.editTestNameAction(id);
    }
  };

  handlClickToEditQuestion = id => () => {
    const { actions } = this.props;
    actions.editingQuestionAction(id);
  };

  handleCheckAnswer = (questionId, ansId) => e => {
    const { questions, isTesting } = this.props;

    if (isTesting) {
      let x = questions.filter(el => el.id === questionId).shift();
      let y = x.answers.filter(el => el.id === ansId).shift();
      y.answer = e.target.value;
      let c = {
        id: questionId,
        type: x.answerType,
        ans: [y]
      };

      if (this.state.array.length === 0) {
        this.setState({
          array: this.state.array.concat(c)
        });
      }

      if (this.state.array.length > 0) {
        if (this.state.array.every(ar => ar.id !== questionId)) {
          this.setState(state => {
            const array = state.array.concat(c);
            return {
              array
            };
          });
        } else {
          this.setState({
            array: this.state.array.map(el => {
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

  handlRadioAnswer = (id, ansId) => () => {
    const { questions, isTesting } = this.props;

    if (isTesting) {
      let x = questions.filter(el => el.id === id).shift();
      let y = x.answers.filter(el => el.id === ansId);
      let c = {
        id: id,
        type: x.answerType,
        ans: y
      };

      if (this.state.array.length === 0) {
        this.setState({
          array: this.state.array.concat(c)
        });
      }

      if (this.state.array.length > 0) {
        this.state.array.map(el => {
          if (el.id === id) {
            this.setState({
              array: this.state.array.map(ele => {
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

          if (this.state.array.every(ar => ar.id !== id) && el.id !== id) {
            this.setState({
              array: this.state.array.concat(c)
            });
          }

          return el;
        });
      }
    }
  };

  handlCheckboxAnswer = (id, ansId) => e => {
    const { questions, isTesting } = this.props;
    if (isTesting) {
      const { array } = this.state;
      let x = questions.filter(el => el.id === id).shift();
      let y = x.answers.filter(el => el.id === ansId);
      let c = {};

      if (this.state.array.length === 0) {
        c = {
          id: id,
          type: x.answerType,
          ans: y
        };
        this.setState({
          array: this.state.array.concat(c)
        });
      }

      if (this.state.array.length > 0) {
        if (e.target.checked === true) {
          if (this.state.array.every(ar => ar.id !== id)) {
            c = {
              id: id,
              type: x.answerType,
              ans: y
            };
            this.setState({
              array: array.concat(c)
            });
          } else {
            let z = y.shift();
            this.setState({
              array: this.state.array.map(item => {
                if (item.id === id) {
                  item.ans.push(z);
                }
                return item;
              })
            });
          }
        } else {
          this.setState({
            array: array.map(el => {
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
    const { actions, testId, test } = this.props;
    actions.fetchTestQuestionAction(testId);
    if (test.length === 0) {
      actions.fetchTestsAction();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isCalculation, questions, actions } = this.props;

    if (isCalculation) {
      if (isCalculation !== prevProps.isCalculation) {
        let clearArray = this.state.array.filter(el => el.ans.length !== 0);
        clearArray.map(el => {
          if (el.type === "Single") {
            el.ans.map(ans => {
              if (ans.currect === true) {
                this.setState(state => {
                  const value = state.value + 1;
                  return {
                    value
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
                  const value = state.value + 1 / y;
                  return {
                    value
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
                  const value = state.value + 1;
                  return {
                    value
                  };
                });
              }
              return ans;
            });
          }
          return el;
        });
      }
      if (this.state.value !== prevState.value) {
        const questionLen = questions.length;

        let res = Math.round((this.state.value * 100) / questionLen);
        actions.testResultAction(res);
      }
    }
  }

  render() {
    const {
      currentEdit,
      testId,
      actions,
      test,
      questions,
      isAdmin,
      isTesting
    } = this.props;
    return (
      <div className="test">
        <div className="test--body">
          {test.map(elem => {
            if (elem.id === testId) {
              return currentEdit === testId ? (
                <input
                  className="edit-input"
                  autoFocus
                  defaultValue={elem.testTitle}
                  onKeyUp={this.handlKeyUp(testId, elem.testTitle)}
                  onBlur={this.handleChangeCurrentField(testId, elem.testTitle)}
                />
              ) : (
                <h2
                  key={+new Date() * Math.random(100)}
                  className="test--title"
                  title="double click to edit"
                  onDoubleClick={this.handlEditTestTitle(testId)}
                >
                  {elem.testTitle}
                </h2>
              );
            }
            return null;
          })}

          {questions.map(el => (
            <div className="question" key={el.id}>
              <h3 className="question--title">{el.question}</h3>
              <div className="question--answers">
                {el.answers &&
                  el.answerType === "Single" &&
                  el.answers.map(ans => (
                    <div className="answers--box" key={ans.id}>
                      <div className="check--indicator">
                        <input
                          type="radio"
                          className="radio"
                          name={el.id}
                          id={ans.id}
                          onChange={this.handlRadioAnswer(el.id, ans.id)}
                        />
                        <label htmlFor={ans.id}></label>
                      </div>
                      <label className="text" htmlFor={ans.id}>
                        {ans.answer}
                      </label>
                    </div>
                  ))}

                {el.answers &&
                  el.answerType === "Some" &&
                  el.answers.map(ans => (
                    <div className="answers--box" key={ans.id}>
                      <div className="check--indicator">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id={ans.id}
                          onChange={this.handlCheckboxAnswer(el.id, ans.id)}
                        />
                        <label htmlFor={ans.id}></label>
                      </div>
                      <label className="text" htmlFor={ans.id}>
                        {ans.answer}
                      </label>
                    </div>
                  ))}

                {el.answers &&
                  el.answerType === "Numeric" &&
                  el.answers.map(ans => (
                    <div className="answers--box" key={ans.id}>
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
                <div className="admin--tools">
                  <button
                    className="edit"
                    onClick={this.handlClickToEditQuestion(el.id)}
                  />
                  <button
                    className="remove"
                    onClick={this.handleDeleteQuestion(testId, el.id)}
                  >
                    <SvgX key={+new Date() * Math.random(100)} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="test--controls">
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
