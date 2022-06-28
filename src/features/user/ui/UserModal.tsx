import React, { PropsWithChildren } from 'react';

import { Dialog } from 'evergreen-ui';

type UserModalProps = {
  isShown: boolean;
  onOk: () => void;
  onCancel: () => void;
  title: string;
};

export const UserModal: React.FC<PropsWithChildren<UserModalProps>> = ({
  children,
  isShown,
  onCancel,
  onOk,
  title,
}) => {
  return (
    <Dialog isShown={isShown} title={title} onConfirm={onOk} onCancel={onCancel} hasFooter={false}>
      {children}
    </Dialog>
  );
};
