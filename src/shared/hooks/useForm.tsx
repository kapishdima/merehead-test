import React, { useState } from 'react';
import { UserRequestEntity } from '../../features/user/models/user-request.entity';

type UseFormOptions = {
  initialValues: UserRequestEntity;
  handleSubmit: (values: UserRequestEntity) => void;
};

export const useForm = (options: UseFormOptions) => {
  const { initialValues, handleSubmit } = options;
  const [formValues, setFormValues] = useState(initialValues);

  const onChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormValues((values) => ({ ...values, [name]: value }));
    };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return {
    onChange,
    onSubmit,
    values: formValues,
  };
};
