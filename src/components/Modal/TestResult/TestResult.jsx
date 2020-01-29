import React from "react";
import { Link } from "react-router-dom";
import style from "./TestResult.module.scss";

const TestResult = ({ actions, testResult }) => {
  const handleClose = () => {
    actions.closeModalAction();
    actions.resetFilterTrackAction();
  };
  return (
    <div className={style.testResult}>
      <h2 className={style.title} autoFocus>
        Test Results
      </h2>

      <p className={style.description}>{`${testResult}%`}</p>
      <Link to="/" onClick={handleClose}>
        Go to main page
      </Link>
    </div>
  );
};
export default TestResult;
