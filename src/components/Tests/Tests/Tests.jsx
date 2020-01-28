import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../images/file.png";
import logo2 from "../../../images/document.png";
import "./tests.scss";

class Tests extends Component {
  handlAddNewTest = () => {
    const { actions } = this.props;

    actions.addingNewTestAction();
  };

  handleDeleteItem = id => {
    const { actions } = this.props;
    return actions.openConfirmationAction("test", id);
  };

  handlClickStart = () => {
    const { actions, isAdmin } = this.props;
    if (!isAdmin) {
      actions.startTestingAction();
    }
  };

  componentDidMount() {
    const { test, actions } = this.props;

    if (test.length === 0) {
      actions.fetchTestsAction();
    }
  }

  render() {
    const { isAdmin, test, isFiltered } = this.props;
    return (
      <main className="main">
        {test
          .sort(function(a, b) {
            const dateA = new Date(a.date),
              dateB = new Date(b.date);
            if (isFiltered) {
              return dateB - dateA;
            }
            return dateA - dateB;
          })
          .map(el => (
            <div className="testBox" key={el.id}>
              <Link
                to={`/test/${el.id}`}
                className="link"
                onClick={this.handlClickStart}
              >
                <div className="icon">
                  <img src={logo} alt="folder" />
                </div>
                <p>{el.testTitle}</p>
              </Link>
              {isAdmin ? (
                <button
                  onClick={() => this.handleDeleteItem(el.id)}
                  className="deleteTest"
                >
                  Delete
                </button>
              ) : (
                <Link to={`/test/${el.id}`} onClick={this.handlClickStart}>
                  <button className="deleteTest">Start</button>
                </Link>
              )}
            </div>
          ))}

        {isAdmin ? (
          <div className="testBox" onClick={this.handlAddNewTest}>
            <div className="link">
              <div className="icon">
                <img src={logo2} alt="folder" width="120" />
              </div>
            </div>
            <button className="deleteTest">Create new</button>
          </div>
        ) : (
          ""
        )}
      </main>
    );
  }
}

export default Tests;
