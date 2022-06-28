import React from 'react';

import { Pane, majorScale } from 'evergreen-ui';

import { UserDomainEntity } from '../models/user-domain.entity';
import { UserCard } from '../../../shared/ui/UserCard';
import { PAGE_LIMIT } from './UserPagination';
import { useSelector } from 'react-redux';
import { pageSelector } from '../store/selectors/pagination.selector';

type ListUsersProps = {
  users: UserDomainEntity[];
};

const paginate = (users: UserDomainEntity[], page: number) => {
  return users.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT);
};

export const ListUsers: React.FC<ListUsersProps> = ({ users }) => {
  const page = useSelector(pageSelector);
  return (
    <Pane display="flex" flexWrap="wrap" justifyContent="space-between" gap={majorScale(2)}>
      {paginate(users, page).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Pane>
  );
};
