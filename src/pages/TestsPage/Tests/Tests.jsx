import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from 'images/file.png';
import logo2 from 'images/document.png';
import style from './Tests.module.scss';

class Tests extends PureComponent {
  componentDidMount() {
    const {
      tests, actions, isAuthorized, history,
    } = this.props;

    if (tests.length === 0) {
      actions.fetchTestsAction();
    }

    if (!isAuthorized) {
      history.push('/welcome');
    }
  }

  handleAddNewTestClick = () => {
    const { actions } = this.props;
    const text = 'AddingTestTitle';

    actions.openModalAction(text);
  };

  handleDeleteItemClick = (testId) => () => {
    const { actions } = this.props;
    const text = 'Confirmation';
    return actions.openModalAction(text, testId, 'test');
  };

  handleClickStart = (id) => () => {
    const { actions, isAdmin } = this.props;
    if (!isAdmin) {
      actions.startTestingAction();
    }
    actions.getTestIdAction(id);
  };

  render() {
    const { isAdmin, tests } = this.props;
    return (
      <main className={style.main}>
        {tests.map((el) => (
          <div className={style.testBox} key={el.id}>
            <Link
              to={`/tests/${el.id}`}
              className={style.link}
              onClick={this.handleClickStart(el.id)}
            >
              <div className={style.link}>
                <img src={logo} alt="folder" />
              </div>
              <p>{el.testTitle}</p>
            </Link>
            {isAdmin ? (
              <button
                type="button"
                onClick={this.handleDeleteItemClick(el.id)}
                className={style.deleteTest}
              >
                Delete
              </button>
            ) : (
              <Link to={`/tests/${el.id}`} onClick={this.handleClickStart(el.id)}>
                <button className={style.deleteTest} type="button">Start</button>
              </Link>
            )}
          </div>
        ))}

        {isAdmin ? (
          <div className={style.testBox}>
            <div className={style.link}>
              <div className={style.icon}>
                <img src={logo2} alt="folder" width="120" />
              </div>
            </div>
            <button className={style.deleteTest} onClick={this.handleAddNewTestClick} type="button">Create new</button>
          </div>
        ) : (
          ''
        )}
      </main>
    );
  }
}

Tests.propTypes = {
  actions: PropTypes.object.isRequired,
  tests: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Tests);
