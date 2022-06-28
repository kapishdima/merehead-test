import React from 'react';

import { TextInputField, TextareaField, Button, Pane, majorScale } from 'evergreen-ui';

import { useForm } from '../hooks/useForm';
import { UserRequestEntity } from '../../features/user/models/user-request.entity';

export type HandleSubmitFn = (values: any) => void;

type UserFormProps = {
  handleSubmit: HandleSubmitFn;
  initialValues: UserRequestEntity;
};

export const UserForm: React.FC<UserFormProps> = ({ handleSubmit, initialValues }) => {
  const { onChange, onSubmit, values } = useForm({ handleSubmit, initialValues });

  return (
    <Pane paddingBottom={majorScale(2)}>
      <form onSubmit={onSubmit}>
        <TextInputField
          name="name"
          placeholder="Enter user name"
          label="Name"
          value={values['name']}
          onChange={onChange('name')}
        />
        <TextInputField
          name="surname"
          placeholder="Enter user surname"
          label="Surname"
          value={values['surname']}
          onChange={onChange('surname')}
        />
        <TextareaField
          name="desc"
          placeholder="Enter user description"
          label="Description"
          value={values['desc']}
          onChange={onChange('desc')}
        />
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </form>
    </Pane>
  );
};
