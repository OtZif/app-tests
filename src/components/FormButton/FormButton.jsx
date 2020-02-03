import React from 'react'
import style from './FormButton.module.scss'
import classNames  from 'classnames';

const FormButton = ({ color = "green", text, click }) => {
  const btnClass = classNames(
    style.root,
    color === "green" ? style.green : style.red
  );
  return (
    <button className={btnClass} onClick={click}>
      {text}
    </button>
  );
};

export default FormButton;