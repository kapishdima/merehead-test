import React from 'react';

import { useDispatch } from 'react-redux';

import { Pane, Heading, Paragraph, IconButton, TrashIcon, majorScale } from 'evergreen-ui';
import { UserDomainEntity } from '../../features/user/models/user-domain.entity';
import { createDeleteUserAction } from '../../features/user/store/actions';
import { EditUser } from '../../features/user/ui/EditUser';

type UserCardProps = {
  user: UserDomainEntity;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { id, name, surname, description } = user;

  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(createDeleteUserAction(id));
  };

  return (
    <Pane
      display="flex"
      flex="1 0 26%"
      flexDirection="column"
      justifyContent="space-between"
      border
      padding={majorScale(2)}
      borderRadius={majorScale(1)}>
      <Pane>
        <Heading>
          {name} {surname}
        </Heading>
        <Paragraph marginBottom={majorScale(2)} marginTop={majorScale(1)}>
          {description}
        </Paragraph>
      </Pane>
      <Pane display="flex" columnGap={majorScale(1)}>
        <EditUser user={user} />
        <IconButton intent="danger" icon={TrashIcon} onClick={deleteUser} />
      </Pane>
    </Pane>
  );
};
