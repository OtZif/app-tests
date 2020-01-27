import { all } from 'redux-saga/effects';

import tests from './tests';
import questions from './questions'

export default function* RootSaga() {
  yield all([
    tests(),
    questions(),
  ]);
}