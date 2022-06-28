import { call, put, select, takeEvery } from 'redux-saga/effects';

import { userApi } from '../../../../features/user/api/user.api';
import { toDomain } from '../../../../features/user/models/user-domain.entity';
import { UserResponseEntity } from '../../../../features/user/models/user-response.entity';
import {
  createDeleteUserAction,
  createDeleteUserSuccessAction,
  createLoadingEndAction,
  createLoadingStartAction,
  createLoadUsersSuccessAction,
  createUserCreateAction,
  createUserCreateSuccessAction,
  createUserEditAction,
  createUserEditSuccessAction,
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  LOAD_USERS,
} from '../actions';

function* loadUsersList() {
  yield put(createLoadingStartAction());

  const users: UserResponseEntity[] = yield call(userApi.getList);

  yield put(createLoadUsersSuccessAction(users.map(toDomain)));
  yield put(createLoadingEndAction());
}

function* deleteUsers(action: ReturnType<typeof createDeleteUserAction>) {
  if (!action.payload) {
    return;
  }

  yield call(userApi.deleteUser, action.payload);
  yield put(createDeleteUserSuccessAction(action.payload));
}

function* createUser(action: ReturnType<typeof createUserCreateAction>) {
  if (!action.payload) {
    return;
  }

  const createdUser: UserResponseEntity = yield call(userApi.createUser, action.payload);

  yield put(createUserCreateSuccessAction(toDomain(createdUser)));
}

function* editUser(action: ReturnType<typeof createUserEditAction>) {
  if (!action.payload) {
    return;
  }

  const editedUser: UserResponseEntity = yield call(
    userApi.editUser,
    action.payload.id,
    action.payload.values,
  );

  yield put(createUserEditSuccessAction(toDomain({ ...editedUser, user_id: action.payload.id })));
}

export function* userSaga() {
  yield takeEvery(LOAD_USERS, loadUsersList);
  yield takeEvery(DELETE_USER, deleteUsers);
  yield takeEvery(CREATE_USER, createUser);
  yield takeEvery(EDIT_USER, editUser);
}
