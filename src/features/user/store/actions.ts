import { Action } from '../../../app/types';
import { UserDomainEntity } from '../models/user-domain.entity';
import { UserRequestEntity } from '../models/user-request.entity';

export const LOAD_USERS = 'USERS/LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'USERS/LOAD_USERS_SUCCESS';
export const DELETE_USER = 'USERS/DELETE_USER';
export const DELETE_USER_SUCCESS = 'USERS/DELETE_USER_SUCCESS';
export const CREATE_USER = 'USERS/CREATE_USER';
export const CREATE_USER_SUCCESS = 'USERS/CREATE_USER_SUCCESS';
export const EDIT_USER = 'USERS/EDIT_USER';
export const EDIT_USER_SUCCESS = 'USERS/EDIT_USER_SUCCESS';

export const LOADING_START = 'LOADING/LOADING_START';
export const LOADING_END = 'LOADING/LOADING_END';

export const CHANGE_PAGE = 'PAGINATION/CHANGE_PAGE';

export const createLoadUserAction = (): Action => ({
  type: LOAD_USERS,
});

export const createLoadUsersSuccessAction = (
  users: UserDomainEntity[],
): Action<UserDomainEntity[]> => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const createDeleteUserAction = (id: number): Action<number> => ({
  type: DELETE_USER,
  payload: id,
});

export const createDeleteUserSuccessAction = (id: number): Action<number> => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

export const createUserCreateAction = (values: UserRequestEntity): Action<UserRequestEntity> => ({
  type: CREATE_USER,
  payload: values,
});

export const createUserCreateSuccessAction = (
  user: UserDomainEntity,
): Action<UserDomainEntity> => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserEditAction = (
  id: number,
  values: UserRequestEntity,
): Action<{ id: number; values: UserRequestEntity }> => ({
  type: EDIT_USER,
  payload: { id, values },
});

export const createUserEditSuccessAction = (user: UserDomainEntity): Action<UserDomainEntity> => ({
  type: EDIT_USER_SUCCESS,
  payload: user,
});

export const createLoadingStartAction = (): Action => ({
  type: LOADING_START,
});

export const createLoadingEndAction = (): Action => ({
  type: LOADING_END,
});

export const createChangePageAction = (page: number): Action<number> => ({
  type: CHANGE_PAGE,
  payload: page,
});
