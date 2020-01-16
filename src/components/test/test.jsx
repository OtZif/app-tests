import React from "react";

import "./test.scss";
import SvgX from "../svgX/svgX";
import CreateQuestion from "../createQuestion/createQuestion";

const Test = ({ actions, test, testId, admin, currentEdit, currentField, }) => {
  // console.log(test);
  const handleDeleteQuestion = (testId, questionId) => () => {
    actions.deleteQuestionAction(testId, questionId);
    // console.log("hello", testId, questionId);
  };
  const handleChangeCurrentField = (id, name) => {
    return () => actions.changeCurrentField(id, name);
  };

  const element = test.map(elem => {
    // console.log("testID", testId);
    // console.log("elID", elem.id);
    if (parseInt(elem.id, 10) === testId) {
      // console.log(elem);
      return (
        <div className="test" key={+new Date()*Math.random(100)}>
          <div className="test--body">
            <h2 className="test--title">{elem.testTitle}</h2>

            {elem.questions.map(el => (
              <div className="question" key={el.id}>
                {currentEdit === el.id && currentField === "question" ? (
                  <input
                    className=""
                    autoFocus
                    defaultValue={el.performer}
                    // onKeyUp={}
                    // onBlur={}
                  />
                ) : (
                  <h3
                    className="question--title"
                    onDoubleClick={handleChangeCurrentField(el.id, "question")}
                  >
                    {el.question}
                  </h3>
                )}
                <div className="question--answers">
                  {/* {console.log("el.ans", el.answers)} */}
                  {el.answers && el.answerType === 'radio' &&
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

                    {el.answers && el.answerType === 'checkbox' &&
                    el.answers.map(ans => (
                      <div className="answers--box" key={ans.id}>
                        <div className="check--indicator">
                          <input
                            type="checkbox"
                            className="checkbox"
                            // name={el.id}
                            id={ans.id}
                          />
                          <label htmlFor={ans.id}></label>
                        </div>
                        <label className="text" htmlFor={ans.id}>
                          {ans.answer}
                        </label>
                      </div>
                    ))}

                  {el.answers && el.answerType === 'numeric' &&
                    el.answers.map(ans => (
                      <div className="answers--box" key={ans.id}>
                        <input type="number" id={ans.id} placeholder='type answer'/>
                      </div>
                    ))}

                </div>
                {admin && (
                  <button
                    className="remove"
                    onClick={handleDeleteQuestion(elem.id, el.id)}
                  >
                    <SvgX key={+new Date()*Math.random(100)}/>
                  </button>
                )}
              </div>
            ))}
          </div>
          {/*test--body*/}
          {admin && (
            <div className="test--controls">
              <CreateQuestion  actions={actions} testId={testId}/>
            </div>
          )}
        </div>
      );
    }
    return null;
  });
  return element;
};

export default Test;
