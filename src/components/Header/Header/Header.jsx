import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import home from 'images/structural.png';
import user from 'images/user.png';
import filter from 'images/filter.png';
import { ENTER_KEY } from 'models/constants/index';
import SearchSvg from '../SearchSvg/SearchSvg';
import style from './Header.module.scss';

const Header = ({
  actions, userName, isAuthorized, searchLineText, history,
}) => {
  const handleLoginClick = () => {
    if (isAuthorized) {
      actions.logoutAction();
      actions.resetFilterTrackAction();
      history.push('/welcome');
    } else {
      actions.openModalAction('Autorisation');
    }
  };

  const handleSearchChange = (e) => {
    actions.searchTestAction(e.target.value);
    history.push(`tests?search=${e.target.value}`);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === '') {
        (e.target.value = '');
      }
      return e.target.blur();
    }
    return e;
  };

  return (
    <div className={style.header}>
      <Link to={isAuthorized ? '/tests' : '/welcome'} onClick={actions.resetFilterTrackAction}>
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
          <button type="button" className={style.filterBox} onClick={actions.sortByDateAction}>
            <img src={filter} alt="Filter" title="Filter" />
          </button>
        )}
        <div className={style.usersBox}>
          <button type="button" onClick={handleLoginClick}>{isAuthorized ? `Logout ${userName}` : userName}</button>
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

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  searchLineText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,

};

export default withRouter(Header);
