import { combineReducers } from 'redux';

import tests from 'models/tests/reducers/tests';
import questions from 'models/questions/reducers/questions';
import users from 'models/users/reducers/users';
import filters from 'models/filters/reducers/filters';
import authorisation from 'models/authorisation/reducers/authorisation';
import modal from 'models/modal/reducers/modal';

export default combineReducers({
  tests,
  questions,
  users,
  authorisation,
  modal,
  filters,
});
