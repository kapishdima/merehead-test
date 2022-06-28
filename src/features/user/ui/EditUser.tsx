import React, { useState } from 'react';
import { EditIcon, IconButton } from 'evergreen-ui';
import { useDispatch } from 'react-redux';

import { UserForm } from '../../../shared/ui/UserForm';
import { UserDomainEntity } from '../models/user-domain.entity';
import { UserRequestEntity } from '../models/user-request.entity';
import { createUserEditAction } from '../store/actions';
import { UserModal } from './UserModal';

type EditUserProps = {
  user: UserDomainEntity;
};

export const EditUser: React.FC<EditUserProps> = ({ user }) => {
  const [isShownCreatingModal, setCreatingModalShown] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setCreatingModalShown(true);
  };

  const closeModal = () => {
    setCreatingModalShown(false);
  };

  const handleSubmit = (value: UserRequestEntity) => {
    dispatch(createUserEditAction(user.id, value));
    closeModal();
  };

  return (
    <>
      <IconButton icon={EditIcon} onClick={openModal} />
      <UserModal
        isShown={isShownCreatingModal}
        onCancel={closeModal}
        onOk={closeModal}
        title={`${user.name} ${user.surname}`}>
        <UserForm
          handleSubmit={handleSubmit}
          initialValues={{ name: user.name, surname: user.surname, desc: user.description }}
        />
      </UserModal>
    </>
  );
};
