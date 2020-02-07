import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ENTER_KEY } from 'models/constants/index';
import SvgX from 'components/SvgX/SvgX';
import CreateQuestion from '../CreateQuestion/CreateQuestion';
import style from './Test.module.scss';

class Test extends PureComponent {
  state = {
    currentAnswersArray: [],
    currectAnswersCount: 0,
  };

  componentDidMount() {
    const {
      actions, tests, isAuthorized, history, match,
    } = this.props;
    const testId = +match.params.id;
    actions.fetchTestQuestionAction(testId);
    if (tests.length === 0) {
      actions.fetchTestsAction();
    }
    if (!isAuthorized) {
      history.push('/welcome');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { modalType, questions, actions } = this.props;
    const { currectAnswersCount, currentAnswersArray } = this.state;


    if (modalType === 'Calculation') {
      if (modalType !== prevProps.modalType) {
        const clearArray = currentAnswersArray.filter(
          (el) => el.ans.length !== 0,
        );
        clearArray.map((el) => {
          if (el.type === 'Single') {
            el.ans.map((ans) => {
              if (ans.currect === true) {
                this.setState((state) => {
                  const currectAnswersCountNew = state.currectAnswersCount + 1;
                  return {
                    currectAnswersCount: currectAnswersCountNew,
                  };
                });
              }
              return ans;
            });
          }
          if (el.type === 'Some') {
            const z = [...questions].filter((ques) => ques.id === el.id).shift();
            const y = z.answers.filter((answ) => answ.currect === true).length;

            el.ans.map((ans) => {
              if (ans.currect === true) {
                this.setState((state) => {
                  const currectAnswersCountNew = state.currectAnswersCount + 1 / y;
                  return {
                    currectAnswersCount: currectAnswersCountNew,
                  };
                });
              }
              return ans;
            });
          }
          if (el.type === 'Numeric') {
            el.ans.map((ans) => {
              if (ans.answer === ans.currect) {
                this.setState((state) => {
                  const currectAnswersCountNew = state.currectAnswersCount + 1;
                  return {
                    currectAnswersCount: currectAnswersCountNew,
                  };
                });
              }
              return ans;
            });
          }
          return el;
        });
      }
      if (currectAnswersCount !== prevState.currectAnswersCount) {
        const questionLen = questions.length;

        const res = Math.round(
          (currectAnswersCount * 100) / questionLen,
        );
        actions.testResultAction(res);
      }
    }
    if (modalType !== prevProps.modalType) {
      if (modalType !== 'Calculation') {
        this.setState({
          currectAnswersCount: 0,
        });
      }
    }
  }

  handleDeleteQuestion = (testId, questionId) => () => {
    const { actions } = this.props;
    const text = 'Confirmation';
    actions.openModalAction(text, testId, 'question', questionId);
  };

  handleChangeCurrentField = (id, title) => (e) => {
    const { actions } = this.props;
    if (e.target.value.trim() === '') e.target.value = title;
    actions.saveTestNameAction(id, e.target.value);
  };

  handleKeyUp = (id, title) => (e) => {
    const { actions } = this.props;
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === '') e.target.value = title;
      actions.saveTestNameAction(id, e.target.value);
    }
  };

  handleEditTestTitle = (text, id) => {
    const { actions, isAdmin } = this.props;
    if (isAdmin) {
      return () => actions.editTestNameAction(text, id);
    }
  };

  handleClickToEditQuestion = (id) => () => {
    const { actions } = this.props;
    const text = 'AddQuestion';
    actions.editingQuestionAction(text, id);
  };

  handleCheckAnswer = (questionId, ansId) => (e) => {
    const { questions, isTesting } = this.props;
    const { currentAnswersArray } = this.state;


    if (isTesting) {
      const x = [...questions].filter((el) => el.id === questionId).shift();
      const y = x.answers.filter((el) => el.id === ansId).shift();
      y.answer = e.target.value;
      const c = {
        id: questionId,
        type: x.answerType,
        ans: [y],
      };

      if (currentAnswersArray.length === 0) {
        this.setState({
          currentAnswersArray: currentAnswersArray.concat(c),
        });
      }

      if (currentAnswersArray.length > 0) {
        if (currentAnswersArray.every((ar) => ar.id !== questionId)) {
          this.setState({
            currentAnswersArray: currentAnswersArray.concat(c),
          });
        } else {
          this.setState({
            currentAnswersArray: currentAnswersArray.map((el) => {
              if (el.id === questionId) {
                return {
                  ...el,
                  ans: [y],
                };
              }
              return el;
            }),
          });
        }
      }
    }
  };

  handleRadioAnswer = (id, ansId) => () => {
    const { questions, isTesting } = this.props;
    const { currentAnswersArray } = this.state;

    if (isTesting) {
      const x = [...questions].filter((el) => el.id === id).shift();
      const y = x.answers.filter((el) => el.id === ansId);
      const c = {
        id,
        type: x.answerType,
        ans: y,
      };

      if (currentAnswersArray.length === 0) {
        this.setState({
          currentAnswersArray: currentAnswersArray.concat(c),
        });
      }

      if (currentAnswersArray.length > 0) {
        currentAnswersArray.map((el) => {
          if (el.id === id) {
            this.setState({
              currentAnswersArray: currentAnswersArray.map((ele) => {
                if (ele.id === id) {
                  return {
                    ...ele,
                    ans: y,
                  };
                }
                return ele;
              }),
            });
          }

          if (
            currentAnswersArray.every((ar) => ar.id !== id)
            && el.id !== id
          ) {
            this.setState({
              currentAnswersArray: currentAnswersArray.concat(c),
            });
          }

          return el;
        });
      }
    }
  };

  handleCheckboxAnswer = (id, ansId) => (e) => {
    const { questions, isTesting } = this.props;
    const { currentAnswersArray } = this.state;
    if (isTesting) {
      const x = [...questions].filter((el) => el.id === id).shift();
      const y = x.answers.filter((el) => el.id === ansId);
      let c = {};

      if (currentAnswersArray.length === 0) {
        c = {
          id,
          type: x.answerType,
          ans: y,
        };
        this.setState({
          currentAnswersArray: currentAnswersArray.concat(c),
        });
      }

      if (currentAnswersArray.length > 0) {
        if (e.target.checked === true) {
          if (currentAnswersArray.every((ar) => ar.id !== id)) {
            c = {
              id,
              type: x.answerType,
              ans: y,
            };
            this.setState({
              currentAnswersArray: currentAnswersArray.concat(c),
            });
          } else {
            const z = y.shift();
            this.setState({
              currentAnswersArray: currentAnswersArray.map((item) => {
                if (item.id === id) {
                  item.ans.push(z);
                }
                return item;
              }),
            });
          }
        } else {
          this.setState({
            currentAnswersArray: currentAnswersArray.map((el) => {
              if (el.id === id) {
                return {
                  ...el,
                  ans: el.ans.filter((ans) => ans.id !== ansId),
                };
              }

              return el;
            }),
          });
        }
      }
    }
  };

  render() {
    const {
      currentEdit,
      match,
      actions,
      tests,
      questions,
      isAdmin,
      isTesting,
    } = this.props;
    const testId = +match.params.id;
    return (
      <div className={style.test}>
        <div className={style.testBody}>
          {tests.map((elem) => {
            if (elem.id === testId) {
              return currentEdit.id === testId
              && currentEdit.text === 'title' ? (
                <input
                  autoFocus
                  key={testId}
                  className={style.editInput}
                  defaultValue={elem.testTitle}
                  onKeyUp={this.handleKeyUp(testId, elem.testTitle)}
                  onBlur={this.handleChangeCurrentField(testId, elem.testTitle)}
                />
                ) : (
                  <h2
                    key={+new Date() * Math.random(100)}
                    className={style.testTitle}
                    title="double click to edit"
                    onDoubleClick={this.handleEditTestTitle('title', testId)}
                  >
                    {elem.testTitle}
                  </h2>
                );
            }
            return null;
          })}

          {questions.map((el) => (
            <div className={style.question} key={el.id}>
              <h3 className={style.questionTitle}>{el.question}</h3>
              <div className={style.questionAnswers}>
                {el.answers
                && el.answerType === 'Single'
                  && el.answers.map((ans) => (
                    <div className={style.answersBox} key={ans.id}>
                      <div className={style.checkIndicator}>
                        <input
                          type="radio"
                          className={style.radio}
                          name={el.id}
                          id={ans.id}
                          onChange={this.handleRadioAnswer(el.id, ans.id)}
                        />
                        <label htmlFor={ans.id} />
                      </div>
                      <label className={style.text} htmlFor={ans.id}>
                        {ans.answer}
                      </label>
                    </div>
                  ))}

                {el.answers
                && el.answerType === 'Some'
                && el.answers.map((ans) => (
                  <div className={style.answersBox} key={ans.id}>
                    <div className={style.checkIndicator}>
                      <input
                        type="checkbox"
                        className={style.checkbox}
                        id={ans.id}
                        onChange={this.handleCheckboxAnswer(el.id, ans.id)}
                      />
                      <label htmlFor={ans.id} />
                    </div>
                    <label className={style.text} htmlFor={ans.id}>
                      {ans.answer}
                    </label>
                  </div>
                ))}

                {el.answers
                && el.answerType === 'Numeric'
                && el.answers.map((ans) => (
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
                    aria-label="edit"
                    type="button"
                    className={style.edit}
                    onClick={this.handleClickToEditQuestion(el.id)}
                  />
                  <button
                    type="button"
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

Test.propTypes = {
  actions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isTesting: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  tests: PropTypes.array.isRequired,
  currentEdit: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  questions: PropTypes.array.isRequired,
  // testId: PropTypes.number,
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Test);
