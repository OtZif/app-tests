import React, { useState } from "react";
import style from "./TestTitle.module.scss";
import { ENTER_KEY } from "models/constants/index";
import GreenButton from 'components/GreenButton/GreenButton'
import RedButton from 'components/RedButton/RedButton'

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
    <div className={style.testTitle}>
      <h2 className={style.title} autoFocus>
        Add Test Title
      </h2>
      <input
        type="text"
        onKeyUp={handlKeyUp}
        onChange={handlChange}
        autoFocus
      />
      <p className={`${style.error} ${error ? style.errorText : ""}`}>
        Title field is empty or has invalid format
      </p>
      <GreenButton text={'Save'} click={handlClickSave} />
      <RedButton text ={'Cancel'} click ={handleClickCancel} />
    </div>
  );
};

export default TestTitle;
