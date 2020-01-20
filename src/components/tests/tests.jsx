import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/file.png";
import logo2 from "../../images/document.png";
import "./tests.scss";

const Tests = ({ admin, test, actions, filter, history }) => {
  const handlAddNewTest = () => {
    actions.addingNewTestAction();
  };
  const handleDeleteItem = id => {
    return actions.deleteTestAction(id);
  };
  return (
    <main className="main">
      {test
        .sort(function(a, b) {
          const dateA = new Date(a.date),
            dateB = new Date(b.date);
          if (filter) {
            return dateB - dateA;
          }
          return dateA - dateB;
        })
        .map(el => (
          <div className="testBox" key={el.id}>
            <Link to={`/test/${el.id}`} className="link">
              <div className="icon">
                <img src={logo} alt="folder" />
              </div>
              <p>{el.testTitle}</p>
            </Link>
            {admin ? (
              <button
                onClick={() => handleDeleteItem(el.id)}
                className="deleteTest"
              >
                Delete
              </button>
            ) : (
              <Link to={`/test/${el.id}`}>
                <button className="deleteTest">Start</button>
              </Link>
            )}
          </div>
        ))}

      {admin ? (
        <div className="testBox" onClick={handlAddNewTest}>
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
};

export default Tests;
