import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from 'models/actions/index';
import {
  isAdminSelector,
  isFilteredSelector,
  currentEditSelector,
  questionsSelector,
  isTestingSelector,
  modalTypeSelector,
  isAuthorizedSelector,
} from 'models/selectors/index';

import Test from './Test/Test';

const TestContainer = ({
  isAdmin,
  isTesting,
  tests,
  actions,
  currentEdit,
  questions,
  modalType,
  isAuthorized,
}) => (
  <Test
    tests={tests}
    isAdmin={isAdmin}
    isTesting={isTesting}
    actions={actions}
    currentEdit={currentEdit}
    questions={questions}
    modalType={modalType}
    isAuthorized={isAuthorized}
  />
);

const mapStateToProps = (state) => ({
  tests: isFilteredSelector(state),
  isAdmin: isAdminSelector(state),
  currentEdit: currentEditSelector(state),
  questions: questionsSelector(state),
  isTesting: isTestingSelector(state),
  modalType: modalTypeSelector(state),
  isAuthorized: isAuthorizedSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(action, dispatch),
});

TestContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isTesting: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  tests: PropTypes.array.isRequired,
  currentEdit: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  questions: PropTypes.array.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
