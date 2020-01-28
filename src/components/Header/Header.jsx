import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./header.scss";
import home from "../../images/structural.png";
import user from "../../images/user.png";
import filter from "../../images/filter.png";
import { ENTER_KEY } from "../../constants/index";

const Header = ({ actions, userName, isAuthorized, filterTrack, history }) => {
  const handleLogin = () => {
    if (isAuthorized) {
      actions.logoutAction();
      actions.resetFilterTrackAction();
      history.push("/");
    } else {
      actions.loginAction();
    }
  };

  const handleSort = () => {
    actions.sortByDateAction();
  };

  const handleSearch = e => {
    actions.searchTestAction(e.target.value);
    history.push(`/?search=${e.target.value}`);
  };

  const handleKeyUp = e => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === "") {
        return (e.target.value = "");
      } else {
        return e.target.blur();
      }
    }
  };
  const handleClick = () => {
    return actions.resetFilterTrackAction();
  };

  return (
    <div className="header">
      <Link to="/" onClick={handleClick}>
        <img src={home} alt="home logo" title="Home" className="logo" />
      </Link>
      <div className="header--right">
        {isAuthorized && (
          <div className="search-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              id="search"
            >
              <path d="M8.3283 0C3.73857 0 0 3.73857 0 8.3283C0 12.918 3.73857 16.6566 8.3283 16.6566C10.3242 16.6566 12.1571 15.9479 13.5937 14.7714L18.5663 19.7439C18.643 19.8239 18.7349 19.8877 18.8366 19.9316C18.9383 19.9756 19.0478 19.9988 19.1586 20C19.2694 20.0011 19.3793 19.9801 19.4819 19.9382C19.5845 19.8963 19.6777 19.8344 19.756 19.756C19.8344 19.6777 19.8963 19.5845 19.9382 19.4819C19.9801 19.3793 20.0011 19.2694 20 19.1586C19.9988 19.0478 19.9756 18.9383 19.9316 18.8366C19.8877 18.7349 19.8239 18.643 19.7439 18.5663L14.7714 13.5937C15.9479 12.1571 16.6566 10.3242 16.6566 8.3283C16.6566 3.73857 12.918 0 8.3283 0ZM8.3283 1.66566C12.0178 1.66566 14.9909 4.63876 14.9909 8.3283C14.9909 12.0178 12.0178 14.9909 8.3283 14.9909C4.63876 14.9909 1.66566 12.0178 1.66566 8.3283C1.66566 4.63876 4.63876 1.66566 8.3283 1.66566Z"></path>
            </svg>
            <input
              type="text"
              value={filterTrack}
              placeholder="Search"
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
            />
          </div>
        )}
        {isAuthorized && (
          <div className="filter-box" onClick={handleSort}>
            <img src={filter} alt="Filter" title="Filter" />
          </div>
        )}
        <div className="users-box" onClick={handleLogin}>
          <p>{isAuthorized ? `Logout ${userName}` : userName}</p>
          <img
            src={user}
            alt="user imgage"
            title="Login"
            className="user-img"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
