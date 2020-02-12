import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from 'models/actions/index';
import {
  isAuthorizedSelector,
  userNameSelector,
  searchLineTextSelector,
} from 'models/selectors/index';
import Header from './Header/Header';

class HeaderContainer extends PureComponent {
  render() {
    const {
      isAuthorized,
      userName,
      actions,
      searchLineText,
    } = this.props;
    const {
      logoutAction, resetFilterTrackAction, openModalAction, searchTestAction, sortByDateAction,
    } = actions;
    return (
      <Header
        userName={userName}
        isAuthorized={isAuthorized}
        logout={logoutAction}
        resetFilterTrack={resetFilterTrackAction}
        openModal={openModalAction}
        searchTest={searchTestAction}
        sortByDate={sortByDateAction}
        searchLineText={searchLineText}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorizedSelector(state),
  userName: userNameSelector(state),
  searchLineText: searchLineTextSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(action, dispatch),
});

HeaderContainer.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  searchLineText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
