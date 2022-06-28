import { all, spawn } from 'redux-saga/effects';
import { userSaga } from '../features/user/store/sagas/user';

export function* rootSaga() {
  const sagas = [userSaga];

  yield all(sagas.map((s) => spawn(s)));
}
