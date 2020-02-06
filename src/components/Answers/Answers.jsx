import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Answers.module.scss';
import Answer from './Answer/Answer';

class Answers extends Component {
  constructor() {
    super();
    this.state = {
      answersArray: [{ id: +new Date(), answer: '', currect: false }],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { type, updateAnswers, answers } = this.props;
    const { answersArray } = this.state;
    if (type !== prevProps.type) {
      if (type === 'Numeric') {
        this.setState({
          arranswersArrayay: [{ id: +new Date(), answer: '', currect: '' }],
        });
      } else {
        this.setState({
          answersArray: answersArray.map((el) => ({
            ...el,
            currect: false,
          })),
        });
      }
    }
    if (answers !== prevProps.answers) {
      this.setState({
        answersArray: answers,
      });
    }

    if (answersArray !== prevState.answersArray) {
      updateAnswers(answersArray);
    }
  }

  updateCheckbox = (id, currect) => {
    const { answersArray } = this.state;
    this.setState({
      answersArray: answersArray.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            currect,
          };
        }
        return el;
      }),
    });
  };

  updateRadio = (id, currect) => {
    const { answersArray } = this.state;
    this.setState({
      answersArray: answersArray.map((el) => {
        if (el.id !== id) {
          return {
            ...el,
            currect: false,
          };
        }
        return {
          ...el,
          currect,
        };
      }),
    });
  };

  updateAnswer = (id, text) => {
    const { answersArray } = this.state;
    this.setState({
      answersArray: answersArray.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            answer: text,
          };
        }
        return el;
      }),
    });
  };

  updateNumericAnswer = (id, text) => {
    const { answersArray } = this.state;
    this.setState({
      answersArray: answersArray.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            currect: text,
          };
        }
        return el;
      }),
    });
  };

  addAnswer = () => {
    const { answersArray } = this.state;
    const id = +new Date();
    const x = {
      id,
      answer: '',
      currect: false,
    };
    const newArr = [...answersArray];
    newArr.push(x);
    if (newArr.length <= 10) {
      this.setState({
        answersArray: newArr,
      });
    }
  };

  removeAnswer = (id) => {
    const { answersArray } = this.state;
    this.setState({
      answersArray: answersArray.filter((el) => el.id !== id),
    });
  };

  render() {
    const { type } = this.props;
    const { answersArray } = this.state;

    return (
      <div className={styles.root}>
        {answersArray.map((el) => (
          <Answer
            key={el.id}
            id={el.id}
            type={type}
            answer={el.answer}
            currect={el.currect}
            updateRadio={this.updateRadio}
            updateCheckbox={this.updateCheckbox}
            updateAnswer={this.updateAnswer}
            updateNumericAnswer={this.updateNumericAnswer}
            removeAnswer={this.removeAnswer}
          />
        ))}
        {type !== 'Numeric' && type !== 'Choose Type' && answersArray.length <= 9 && (
          <button className={styles.button} onClick={this.addAnswer} type="button">
            Add answer
          </button>
        )}
      </div>
    );
  }
}
Answers.propTypes = {
  type: PropTypes.string.isRequired,
  answers: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  updateAnswers: PropTypes.func.isRequired,
};
export default Answers;
