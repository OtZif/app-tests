import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from 'models/actions/index';
import {
  isFilteredSelector,
  isAdminSelector,
  isAuthorizedSelector,
} from 'models/selectors/index';

import Tests from './Tests/Tests';

const TestsContainer = ({
  tests,
  isAdmin,
  actions,
  isAuthorized,
}) => (
  <Tests tests={tests} isAdmin={isAdmin} actions={actions} isAuthorized={isAuthorized} />
);

const mapStateToProps = (state) => ({
  tests: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
  isAuthorized: isAuthorizedSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(action, dispatch),
});

TestsContainer.propTypes = {
  tests: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer);
