import React, { useEffect } from 'react';

import { Pane, Spinner } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import { ListUsers } from './ListUsers';
import { createLoadUserAction } from '../store/actions';
import { usersSelector } from '../store/selectors/users.selector';
import { UserPagination } from './UserPagination';

export const ListUsersView: React.FC = () => {
  const users = useSelector(usersSelector);
  const loading = useSelector((store: RootState) => store.userState.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createLoadUserAction());
  }, []);

  if (loading) {
    return (
      <Pane width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Spinner />
      </Pane>
    );
  }

  return (
    <>
      <ListUsers users={users} />
      <UserPagination total={users.length} />
    </>
  );
};
