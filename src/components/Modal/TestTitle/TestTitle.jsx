import React, { useState } from "react";
import "./testTitle.scss";
import { ENTER_KEY } from "../../../constants/index";

const TestTitle = ({ actions }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handlClickSave = () => {
    if (value !== "") {
      actions.addTestAction(value);
    } else {
      setError(true);
    }
  };

  const handlKeyUp = e => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") {
        setError(true);
      } else {
        actions.addTestAction(e.target.value);
        e.target.value = "";
      }
    }
  };

  const handlChange = e => {
    setValue(e.target.value);
  };

  const handleClickCancel = e => {
    actions.closeModalAction();
  };

  return (
    <div className="testTitle">
      <h2 className="title" autoFocus>
        Add Test Title
      </h2>
      <input
        type="text"
        onKeyUp={handlKeyUp}
        onChange={handlChange}
        autoFocus
      />
      <p className={`error ${error ? "errorText" : ""}`}>
        Title field is empty or has invalid format
      </p>
      <button onClick={handlClickSave} className="modal--button">
        Save
      </button>
      <button
        onClick={handleClickCancel}
        className=" modal--button modal--button__red"
      >
        Cancel
      </button>
    </div>
  );
};

export default TestTitle;
