import React from 'react';
import PropTypes from 'prop-types';
import SvgX from 'components/SvgX/SvgX';
import Styles from './Answer.module.scss';

const Answer = ({
  type,
  answer,
  currect,
  updateRadio,
  updateCheckbox,
  updateAnswer,
  updateNumericAnswer,
  removeAnswer,
  id,
}) => {
  const handlChangeText = () => (e) => {
    updateAnswer(id, e.target.value);
  };
  const handlCheck = () => (e) => {
    updateCheckbox(id, e.target.checked);
  };
  const CheckRadio = () => (e) => {
    updateRadio(id, e.target.checked);
  };
  const handlChangeNumber = () => (e) => {
    updateNumericAnswer(id, e.target.value);
  };
  const handlRemove = () => () => {
    removeAnswer(id);
  };
  return (
    <div className={Styles.checkBox}>
      {type === 'Single' && (
        <input
          name="radio"
          type="radio"
          checked={currect}
          onChange={CheckRadio(id)}
        />
      )}
      {type === 'Some' && (
        <input type="checkbox" checked={currect} onChange={handlCheck(id)} />
      )}
      {(type === 'Single' || type === 'Some') && (
        <input
          type="text"
          placeholder="Some answer here"
          defaultValue={answer}
          onChange={handlChangeText(id)}
        />
      )}
      {type === 'Numeric' && (
        <input
          placeholder="Type currect numeric answer here"
          type="number"
          defaultValue={currect}
          onChange={handlChangeNumber(id)}
        />
      )}
      {(type === 'Single' || type === 'Some') && (
        <button onClick={handlRemove(id)} className={Styles.removeAnswer} type="button">
          <SvgX />
        </button>
      )}
    </div>
  );
};

Answer.propTypes = {
  type: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  currect: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  updateRadio: PropTypes.func.isRequired,
  updateCheckbox: PropTypes.func.isRequired,
  updateAnswer: PropTypes.func.isRequired,
  updateNumericAnswer: PropTypes.func.isRequired,
  removeAnswer: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,

};

export default Answer;
