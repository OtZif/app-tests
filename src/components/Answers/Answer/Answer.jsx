import React from "react";
import "./Answer.scss";

import SvgX from "../../svgX/svgX";

const Answer = ({
  type,
  answer,
  currect,
  updateRadio,
  updateCheckbox,
  updateAnswer,
  updateNumericAnswer,
  removeAnswer,
  id
}) => {
  const handlChangeText = id => e => {
    updateAnswer(id, e.target.value);
  };
  const handlCheck = id => e => {
    updateCheckbox(id, e.target.checked);
  };
  const CheckRadio = id => e => {
    updateRadio(id, e.target.checked);
  };
  const handlChangeNumber = id => e => {
    updateNumericAnswer(id, e.target.value);
  };
  const handlRemove = id => () => {
    removeAnswer(id);
  };
  return (
    <div className="check--box">
      {type === "Single" && (
        <input
          name="radio"
          type="radio"
          checked={currect}
          onChange={CheckRadio(id)}
        />
      )}
      {type === "Some" && (
        <input type="checkbox" checked={currect} onChange={handlCheck(id)} />
      )}
      {(type === "Single" || type === "Some") && (
        <input
          type="text"
          placeholder="Some answer here"
          defaultValue={answer}
          onChange={handlChangeText(id)}
        />
      )}
      {type === "Numeric" && (
        <input
          placeholder="Type currect numeric answer here"
          type="number"
          defaultValue={currect}
          onChange={handlChangeNumber(id)}
        />
      )}
      {(type === "Single" || type === "Some") && (
        <button onClick={handlRemove(id)} className="remove-answer">
          <SvgX />
        </button>
      )}
    </div>
  );
};

export default Answer;
