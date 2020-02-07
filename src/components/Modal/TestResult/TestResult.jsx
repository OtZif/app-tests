import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './TestResult.module.scss';

const TestResult = ({ actions, testResult }) => {
  const handleClose = () => {
    actions.closeModalAction();
    actions.resetFilterTrackAction();
  };
  return (
    <div className={style.testResult}>
      <h2 className={style.title}>
        Test Results
      </h2>

      <p className={style.description}>{`${testResult}%`}</p>
      <Link to="/tests" onClick={handleClose}>
        Go to main page
      </Link>
    </div>
  );
};

TestResult.propTypes = {
  actions: PropTypes.object.isRequired,
  testResult: PropTypes.number.isRequired,
};

export default TestResult;
