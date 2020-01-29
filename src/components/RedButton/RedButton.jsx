import React from "react";
import style from "./RedButton.module.scss";

const RedButton = ({ text, click }) => {
  return (
    <button className={style.button} onClick={click}>
      {text}
    </button>
  );
};

export default RedButton;
