import React, { PureComponent } from 'react';
import shark from 'images/shark.png';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import style from './Welcome.module.scss';

class Welcome extends PureComponent {
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

Welcome.propTypes = {
  openModal: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Welcome);
