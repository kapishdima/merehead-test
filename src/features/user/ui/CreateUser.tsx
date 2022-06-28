import React from 'react';

import { Button } from 'evergreen-ui';
import { useState } from 'react';
import { UserModal } from './UserModal';
import { UserForm } from '../../../shared/ui/UserForm';
import { useDispatch } from 'react-redux';
import { createUserCreateAction } from '../store/actions';
import { UserRequestEntity } from '../models/user-request.entity';

export const CreateUser: React.FC = () => {
  const [isShownCreatingModal, setCreatingModalShown] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setCreatingModalShown(true);
  };

  const closeModal = () => {
    setCreatingModalShown(false);
  };

  const handleSubmit = (value: UserRequestEntity) => {
    dispatch(createUserCreateAction(value));
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal} appearance="primary">
        Create user
      </Button>
      <UserModal
        isShown={isShownCreatingModal}
        onCancel={closeModal}
        onOk={closeModal}
        title="User creating">
        <UserForm handleSubmit={handleSubmit} initialValues={{ name: '', surname: '', desc: '' }} />
      </UserModal>
    </>
  );
};
