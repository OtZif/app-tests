import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "images/file.png";
import logo2 from "images/document.png";
import style from "./Tests.module.scss";

class Tests extends Component {
  handleAddNewTestClick = () => {
    const { actions } = this.props;
    const text = 'AddingTestTitle';

    actions.openModalAction(text);
  };

  handleDeleteItemClick = testId => () => {
    const { actions } = this.props;
    const text = 'Confirmation';
    return actions.openModalAction(text, testId, "test");
  };

  handleClickStart = () => {
    const { actions, isAdmin } = this.props;
    if (!isAdmin) {
      actions.startTestingAction();
    }
  };

  componentDidMount() {
    const { tests, actions } = this.props;

    if (tests.length === 0) {
      actions.fetchTestsAction();
    }
  }

  render() {
    const { isAdmin, tests } = this.props;
    return (
      <main className={style.main}>
        {tests.map(el => (
            <div className={style.testBox} key={el.id}>
              <Link
                to={`/tests/${el.id}`}
                className={style.link}
                onClick={this.handleClickStart}
              >
                <div className={style.link}>
                  <img src={logo} alt="folder" />
                </div>
                <p>{el.testTitle}</p>
              </Link>
              {isAdmin ? (
                <button
                  onClick={this.handleDeleteItemClick(el.id)}
                  className={style.deleteTest}
                >
                  Delete
                </button>
              ) : (
                <Link to={`/tests/${el.id}`} onClick={this.handleClickStart}>
                  <button className={style.deleteTest}>Start</button>
                </Link>
              )}
            </div>
          ))}

        {isAdmin ? (
          <div className={style.testBox} onClick={this.handleAddNewTestClick}>
            <div className={style.link}>
              <div className={style.icon}>
                <img src={logo2} alt="folder" width="120" />
              </div>
            </div>
            <button className={style.deleteTest}>Create new</button>
          </div>
        ) : (
          ""
        )}
      </main>
    );
  }
}

export default Tests;
