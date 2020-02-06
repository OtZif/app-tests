import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton/FormButton';
import style from './Autorisation.module.scss';


class Autorisation extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      pass: '',
      error: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { users, actions, history } = this.props;
    const { login } = this.state;
    if (users !== prevProps.users) {
      if (users.length > 0) {
        actions.setUserNameAction(users[0].name);
        if (login === 'admin') {
          actions.adminAction();
        }
        actions.authorizedAction();
        actions.closeModalAction();
        history.push('/tests');
      } else {
        this.setState({
          error: true,
        });
      }
    }
  }

  checkLogin = () => {
    const { actions } = this.props;
    const { login, pass } = this.state;
    actions.fetchUserAction(login, pass);
  };

  handleSetLogin = (e) => {
    this.setState({
      login: e.target.value,
    });
  };

  handleSetPass = (e) => {
    this.setState({
      pass: e.target.value,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        action=""
        className={style.autorisationForm}
        onSubmit={(event) => {
          event.preventDefault();
          this.checkLogin();
        }}
      >
        <h2 className={style.title}>
          LOGIN
        </h2>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          onChange={this.handleSetLogin}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.handleSetPass}
        />
        <p
          className={`${style.error} ${
            error ? style.errorText : ''
          }`}
        >
          User not found
        </p>
        <FormButton text="Login" />
      </form>
    );
  }
}

Autorisation.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Autorisation);
