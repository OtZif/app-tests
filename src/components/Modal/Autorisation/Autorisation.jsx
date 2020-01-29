import React, { Component } from "react";
import style from "./Autorisation.module.scss";

import GreenButton from 'components/GreenButton/GreenButton'

class Autorisation extends Component {
  state = {
    login: "",
    pass: "",
    error: false
  };

  checkLogin = () => {
    const { actions } = this.props;
    const { login, pass } = this.state;
    actions.fetchUserAction(login, pass);
  };

  handleSetLogin = e => {
    this.setState({
      login: e.target.value
    });
  };

  handlSetPass = e => {
    this.setState({
      pass: e.target.value
    });
  };

  componentDidMount() {
    const { users } = this.props;
    if (users.length === 0) {
    }
  }

  componentDidUpdate(prevProps) {
    const { users, actions } = this.props;
    if (users !== prevProps.users) {
      if (users.length > 0) {
        actions.setUserNameAction(users[0].name);
        if (this.state.login === "admin") {
          actions.adminAction();
        }
        actions.authorizedAction();
        actions.closeModalAction();
      } else {
        this.setState({
          error: true
        });
      }
    }
  }

  render() {
    return (
      <form
        action=""
        className={style.autorisationForm}
        onSubmit={event => {
          event.preventDefault();
          this.checkLogin();
        }}
      >
        <h2 className={style.title} autoFocus>
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
          onChange={this.handlSetPass}
        />
        <p className={`${style.error} ${this.state.error ? style.errorText : ""}`}>
          User not found
        </p>
        <GreenButton  text = {'Login'}/>
      </form>
    );
  }
};

export default Autorisation;
