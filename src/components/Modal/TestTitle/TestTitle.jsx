import React, { useState } from "react";
import style from "./TestTitle.module.scss";
import { ENTER_KEY } from "models/constants/index";
import FormButton from 'components/FormButton/FormButton'

const TestTitle = ({ actions }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleClickSave = () => {
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

  const handleChange = e => {
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
        onChange={handleChange}
        autoFocus
      />
      <p className={`${style.error} ${error ? style.errorText : ""}`}>
        Title field is empty or has invalid format
      </p>
      <FormButton text={'Save'} click={handleClickSave} />
      <FormButton text ={'Cancel'} click ={handleClickCancel} color={'red'} />
    </div>
  );
};

export default TestTitle;
