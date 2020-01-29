import React, { Component } from "react";
import Styles from "./Answers.module.scss";
import Answer from "./Answer/Answer";

class Answers extends Component {
  state = {
    array: [{ id: +new Date(), answer: "", currect: false }]
  };

  updateCheckbox = (id, currect) => {
    this.setState({
      array: this.state.array.map(el => {
        if (el.id === id) {
          return {
            ...el,
            currect: currect
          };
        }
        return el;
      })
    });
  };

  updateRadio = (id, currect) => {
    this.setState({
      array: this.state.array.map(el => {
        if (el.id !== id) {
          return {
            ...el,
            currect: false
          };
        } else {
          return {
            ...el,
            currect: currect
          };
        }
      })
    });
  };

  updateAnswer = (id, text) => {
    this.setState({
      array: this.state.array.map(el => {
        if (el.id === id) {
          return {
            ...el,
            answer: text
          };
        }
        return el;
      })
    });
  };

  updateNumericAnswer = (id, text) => {
    this.setState({
      array: this.state.array.map(el => {
        if (el.id === id) {
          return {
            ...el,
            currect: text
          };
        }
        return el;
      })
    });
  };

  addAnswer = () => {
    const id = +new Date();
    let x = {
      id: id,
      answer: "",
      currect: false
    };
    const newArr = [...this.state.array];
    newArr.push(x);
    if (newArr.length <= 10) {
      this.setState({
        array: newArr
      });
    }
  };

  removeAnswer = id => {
    this.setState({
      array: this.state.array.filter(el => el.id !== id)
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { type, updateAnswers, answers } = this.props;
    if (type !== prevProps.type) {
      if (type === "Numeric") {
        this.setState({
          array: [{ id: +new Date(), answer: "", currect: "" }]
        });
      } else {
        this.setState({
          array: this.state.array.map(el => {
            return {
              ...el,
              currect: false
            };
          })
        });
      }
    }
    if(answers !== prevProps.answers) {
      this.setState({
        array: answers
      })
    }

    if (this.state.array !== prevState.array) {
      updateAnswers(this.state.array)
    }
  }

  render() {
    const { type } = this.props;
    const { array } = this.state;

    return (
      <div className={Styles.answers}>
        {this.state.array.map(el => {
          return (
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
          );
        })}
        {type !== "Numeric" && type !== "Choose Type" && array.length <= 9 && (
          <button onClick={this.addAnswer} type='button'>Add answer</button>
        )}
      </div>
    );
  }
}

export default Answers;
