import React from 'react';
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

const HeaderContainer = ({
  isAuthorized,
  userName,
  actions,
  searchLineText,
}) => (
  <Header
    actions={actions}
    userName={userName}
    isAuthorized={isAuthorized}
    searchLineText={searchLineText}
  />
);

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
