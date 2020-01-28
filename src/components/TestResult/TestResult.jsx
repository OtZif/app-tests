import React from "react";
import { Link } from "react-router-dom";
import "./testResult.scss";

const TestResult = ({ actions, testResult }) => {
  const handleClose = () => {
    actions.closeModalAction();
  };
  return (
    <div className="test-result">
      <h2 className="title" autoFocus>
        Test Results
      </h2>

      <p className="description">{`${testResult}%`}</p>
      <Link to="/" onClick={handleClose}>
        Go to main page
      </Link>
    </div>
  );
};
export default TestResult;
