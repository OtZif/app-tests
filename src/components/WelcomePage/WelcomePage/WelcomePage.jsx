import React, { Component } from 'react';
import shark from 'images/shark.png';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import style from './WelcomePage.module.scss';

class WelcomePage extends Component {
  componentDidMount() {
    const { isAuthorized, history } = this.props;
    if (isAuthorized) {
      history.push('/tests');
    }
  }

  handleLoginClick = () => {
    const { openModal } = this.props;
    openModal('Autorisation');
  };

  render() {
    return (
      <div className={style.root}>
        <img src={shark} alt="" />
        <div className={style.box}>
          <h1>Welcome to the Incredible Testing Platform</h1>
          <p>
            Please
            {' '}
            <button onClick={this.handleLoginClick} type="button">log in</button>
            {' '}
            to begin
          </p>
        </div>
      </div>
    );
  }
}

WelcomePage.propTypes = {
  openModal: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(WelcomePage);
