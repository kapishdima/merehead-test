import { RootState } from '../../../../app/store';

export const usersSelector = (store: RootState) => store.userState.users;
