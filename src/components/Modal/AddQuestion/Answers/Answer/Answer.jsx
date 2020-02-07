import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SvgX from 'components/SvgX/SvgX';
import style from './Answer.module.scss';

class Answer extends PureComponent {
  handleCheck = (e) => {
    const { id, updateData } = this.props;

    updateData(id, e.target);
  };

  handleRemoveClick = () => {
    const { id, removeAnswer } = this.props;
    removeAnswer(id);
  };

  render() {
    const {
      type,
      answer,
      currect,
    } = this.props;

    return (
      <div className={style.checkBox}>
        {type === 'Single' && (
          <input
            name="radio"
            type="radio"
            checked={currect}
            onChange={this.handleCheck}
          />
        )}
        {type === 'Some' && (
          <input type="checkbox" checked={currect} onChange={this.handleCheck} />
        )}
        {(type === 'Single' || type === 'Some') && (
          <input
            type="text"
            placeholder="Some answer here"
            defaultValue={answer}
            onChange={this.handleCheck}
          />
        )}
        {type === 'Numeric' && (
          <input
            placeholder="Type currect numeric answer here"
            type="number"
            defaultValue={currect}
            onChange={this.handleCheck}
          />
        )}
        {(type === 'Single' || type === 'Some') && (
          <button onClick={this.handleRemoveClick} className={style.removeAnswer} type="button">
            <SvgX />
          </button>
        )}
      </div>
    );
  }
}

Answer.propTypes = {
  type: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  currect: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  updateData: PropTypes.func.isRequired,
  removeAnswer: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,

};

export default Answer;
