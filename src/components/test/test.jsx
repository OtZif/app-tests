import React, {Component} from "react";

import "./test.scss";
import SvgX from "../svgX/svgX";
import CreateQuestion from "../createQuestion/createQuestion";
import { ENTER_KEY } from "../../constants/otherConstants";

class Test extends Component {
  handleDeleteQuestion = (testId, questionId) => () => {
    const { actions } = this.props;
    actions.removeQuestionAction(testId, questionId);
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

  // handleCheckAnswer = (questionId, ansId) => (e) => {
  //   const { questions} = this.props;
  //   questions.map(el=>{
  //     if(el.id === questionId){
  //       el.answers.map(ans => {
  //         if(ans.id === ansId){
  //           if(e.target.value === ans.currect){
  //             console.log('All good', ans.currect)
  //           }
  //         }
  //         return ans;
  //       })
  //     }
  //     return el
  //   })
  // }

  componentDidMount() {
    const { actions, testId, test } = this.props;
    actions.fetchTestQuestionAction(testId);
    if (test.length === 0) {
      actions.fetchTestsAction();
    }
  }

  render() {
    const { currentEdit, testId, actions, test, questions, isAdmin } = this.props;
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
                        //onChange={this.handleCheckAnswer(el.id, ans.id)}
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
        {isAdmin && (
          <div className="test--controls">
            <CreateQuestion actions={actions} testId={testId} />
          </div>
        )}
      </div>
    );
  }
};

export default Test;
