import React, { Component } from "react";
import "./autorisation.scss";

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
        className="autorisation--form"
        onSubmit={event => {
          event.preventDefault();
          this.checkLogin();
        }}
      >
        <h2 className="title" autoFocus>
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
        <p className={`error ${this.state.error ? "errorText" : ""}`}>
          User not found
        </p>
        <button type="submit" className="modal--button">
          Login
        </button>
      </form>
    );
  }
};

export default Autorisation;
