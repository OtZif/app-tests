import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './FormButton.module.scss';

const FormButton = ({ color, text, click }) => {
  const btnClass = classNames(
    style.root,
    color === 'green' ? style.green : style.red,
  );

  return (
    <button className={btnClass} onClick={click} type="submit">
      {text}
    </button>
  );
};

FormButton.defaultProps = {
  color: 'green',
};

FormButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
};

export default FormButton;
