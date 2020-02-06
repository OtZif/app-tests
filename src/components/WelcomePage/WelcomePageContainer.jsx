import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openModalAction } from 'models/actions/index';
import {
  isAuthorizedSelector,
} from 'models/selectors/index';
import WelcomePage from './WelcomePage/WelcomePage';

const WelcomePageContainer = ({
  openModal,
  isAuthorized,
}) => (
  <WelcomePage openModal={openModal} isAuthorized={isAuthorized} />
);

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorizedSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  openModal: bindActionCreators(openModalAction, dispatch),
});

WelcomePageContainer.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePageContainer);
