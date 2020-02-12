import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from 'models/actions/index';
import {
  isAuthorizedSelector,
  isModalSelector,
} from 'models/selectors/index';

import App from './App/App';

const AppContainer = ({
  isAuthorized,
  isModal,
  openModal,
}) => (
  <App
    isModal={isModal}
    isAuthorized={isAuthorized}
    openModal={openModal}
  />
);

const mapStateToProps = (state) => ({
  isModal: isModalSelector(state),
  isAuthorized: isAuthorizedSelector(state),
});
const { openModalAction } = actions;
const mapDispatchToProps = (dispatch) => ({
  openModal: bindActionCreators(openModalAction, dispatch),
});

AppContainer.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  isModal: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
