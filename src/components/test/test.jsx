import React from "react";

import "./test.scss";
import SvgX from "../svgX/svgX";
import CreateQuestion from "../createQuestion/createQuestion";
import { ENTER_KEY } from "../../constants/otherConstants";

const Test = ({ actions, test, testId, admin, currentEdit }) => {
  const handleDeleteQuestion = (testId, questionId) => () => {
    actions.deleteQuestionAction(testId, questionId);
  };
  const handleChangeCurrentField = (id, title) => e => {
    if (e.target.value.trim() === '') e.target.value = title;
    actions.saveTestNameAction(id, e.target.value);
  };

  const handlKeyUp = (id, title) => e => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") e.target.value = title;
        actions.saveTestNameAction(id, e.target.value);
    }
  }

  const handlEditTestTitle = (id) => {
    return () => actions.editTestNameAction(id)
  }

  const handlClickToEditQuestion = (idTest, idQuestion) => () => {
    actions.editingQuestionAction(idTest, idQuestion);
  }

  const element = test.map(elem => {
    if (parseInt(elem.id, 10) === testId) {
      return (
        <div className="test" key={+new Date() * Math.random(100)}>
          <div className="test--body">
            {currentEdit === testId ? (
              <input
                className="edit-input"
                autoFocus
                defaultValue={elem.testTitle}
                onKeyUp={handlKeyUp(testId, elem.testTitle)}
                onBlur={handleChangeCurrentField(testId, elem.testTitle)}
              />
            ) : (
              <h2
                className="test--title"
                title="double click to edit"
                onDoubleClick={handlEditTestTitle(testId)}
              >
                {elem.testTitle}
              </h2>
            )}

            {elem.questions.map(el => (
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
                        />
                      </div>
                    ))}
                </div>
                {admin && (
                  <div className='admin--tools'>
                    <button 
                      className="edit" 
                      onClick={handlClickToEditQuestion(elem.id, el.id)} />
                    <button
                      className="remove"
                      onClick={handleDeleteQuestion(elem.id, el.id)}
                    >
                      <SvgX key={+new Date() * Math.random(100)} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {admin && (
            <div className="test--controls">
              <CreateQuestion actions={actions} testId={testId} />
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
