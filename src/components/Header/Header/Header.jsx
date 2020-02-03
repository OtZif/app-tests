import React from "react";
import { Link, withRouter } from "react-router-dom";

import style from "./Header.module.scss";
import home from "images/structural.png";
import user from "images/user.png";
import filter from "images/filter.png";
import { ENTER_KEY } from "models/constants/index";
import SearchSvg from "components/SearchSvg/SearchSvg";

const Header = ({ actions, userName, isAuthorized, searchLineText, history }) => {
  const handleLoginClick = () => {
    if (isAuthorized) {
      actions.logoutAction();
      actions.resetFilterTrackAction();
      history.push("/welcome");
    } else {
      actions.openModalAction('Autorisation');
    }
  };

  const handleSearchChange = e => {
    actions.searchTestAction(e.target.value);
    history.push(`tests?search=${e.target.value}`);
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
  const handleLinkClick = () => {
    return actions.resetFilterTrackAction();
  };

  return (
    <div className={style.header}>
      <Link to={isAuthorized ? '/tests' : '/welcome'} onClick={handleLinkClick}>
        <img src={home} alt="home logo" title="Home" className={style.logo} />
      </Link>
      <div className={style.headerRight}>
        {isAuthorized && (
          <div className={style.searchBox}>
            <SearchSvg />
            <input
              className={style.searchInput}
              type="text"
              value={searchLineText}
              placeholder="Search test"
              onChange={handleSearchChange}
              onKeyUp={handleKeyUp}
            />
          </div>
        )}
        {isAuthorized && (
          <div className={style.filterBox} onClick={actions.sortByDateAction}>
            <img src={filter} alt="Filter" title="Filter" />
          </div>
        )}
        <div className={style.usersBox}>
          <p onClick={handleLoginClick}>{isAuthorized ? `Logout ${userName}` : userName}</p>
          <img
            src={user}
            alt="user imgage"
            title="Login"
            className={style.userImg}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
