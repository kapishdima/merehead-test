import { Action } from '../../../app/types';
import {
  LOADING_END,
  LOADING_START,
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CHANGE_PAGE,
} from './actions';
import { UserState, initialState } from './state';

export const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADING_END: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          }

          return { ...user, ...action.payload };
        }),
      };
    }
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        pagination: {
          page: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
