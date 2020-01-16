import React, { useState } from "react";
import "./addTestTitle.scss";
import { ENTER_KEY } from "../../constants/otherConstants";

const TestTitle = ({ actions }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handlClickSave = () => {
    if (value !== "") {
      actions.addTest(value);
    } else {
      setError(true);
    }
  };
  
  const handleAddItemKeyUp = e => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") {
        setError(true);
      } else {
        actions.addTest(e.target.value);
        e.target.value = "";
      }
    }
  };

  const handleClickCancel = e => {
    actions.closeModal();
  };

  return (
    <div className="testTitle">
      <h2 className="title" autoFocus>
        Add Test Title
      </h2>
      <input
        type="text"
        onKeyUp={handleAddItemKeyUp}
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
      <p className={`error ${error ? "errorText" : ""}`}>
        Title field is empty or has invalid format
      </p>
      <button onClick={handlClickSave} className="modal--button">Save</button>
      <button onClick={handleClickCancel} className=" modal--button modal--button__red">
        Cancel
      </button>
    </div>
  );
};

export default TestTitle;
