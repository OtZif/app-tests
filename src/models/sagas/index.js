import { all } from 'redux-saga/effects';

import tests from 'models/tests/sagas/tests';
import questions from 'models/questions/sagas/questions';
import users from 'models/users/sagas/users';

export default function* RootSaga() {
  yield all([tests(), questions(), users()]);
}
