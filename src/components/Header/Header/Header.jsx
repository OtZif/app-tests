import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import home from 'images/structural.png';
import user from 'images/user.png';
import filter from 'images/filter.png';
import { ENTER_KEY } from 'models/constants/index';
import SearchSvg from '../SearchSvg/SearchSvg';
import style from './Header.module.scss';

class Header extends PureComponent {
  handleLoginClick = () => {
    const {
      isAuthorized, history, logout, resetFilterTrack, openModal,
    } = this.props;
    if (isAuthorized) {
      logout();
      resetFilterTrack();
      history.push('/');
    } else {
      openModal('Autorisation');
    }
  };

  handleSearchChange = (e) => {
    const { searchTest, history } = this.props;
    searchTest(e.target.value);
    history.push(`tests?search=${e.target.value}`);
  };

  handleKeyUp = (e) => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value.trim() === '') {
        (e.target.value = '');
      }
      return e.target.blur();
    }
    return e;
  };

  render() {
    const {
      sortByDate, resetFilterTrack, isAuthorized, userName, searchLineText,
    } = this.props;
    return (
      <div className={style.header}>
        <Link to={isAuthorized ? '/tests' : '/'} onClick={resetFilterTrack}>
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
                onChange={this.handleSearchChange}
                onKeyUp={this.handleKeyUp}
              />
            </div>
          )}
          {isAuthorized && (
            <button type="button" className={style.filterBox} onClick={sortByDate}>
              <img src={filter} alt="Filter" title="Filter" />
            </button>
          )}
          <div className={style.usersBox}>
            <button type="button" onClick={this.handleLoginClick}>{isAuthorized ? `Logout ${userName}` : userName}</button>
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
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  searchTest: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  resetFilterTrack: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  searchLineText: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,

};

export default withRouter(Header);
