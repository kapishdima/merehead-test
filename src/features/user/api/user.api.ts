import { apiBaseUrl } from '../../../app/settings';
import { UserRequestEntity } from '../models/user-request.entity';
import { UserResponseEntity } from '../models/user-response.entity';

export type UserApi = {
  getList: () => Promise<UserResponseEntity[]>;
  getUser: (id: number) => Promise<UserResponseEntity>;
  createUser: (payload: UserRequestEntity) => Promise<UserResponseEntity>;
  editUser: (id: number, payload: UserRequestEntity) => Promise<UserResponseEntity>;
  deleteUser: (id: number) => Promise<void>;
};

export const userApi: UserApi = {
  getList: async () => {
    const response = await fetch(`${apiBaseUrl}/users`);
    return response.json();
  },
  getUser: async (id: number) => {
    const response = await fetch(`${apiBaseUrl}/user/${id}`);
    return response.json();
  },
  createUser: async (payload: UserRequestEntity) => {
    const response = await fetch(`${apiBaseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    return response.json();
  },
  editUser: async (id: number, payload: UserRequestEntity) => {
    const response = await fetch(`${apiBaseUrl}/user/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    return response.json();
  },
  deleteUser: async (id: number) => {
    const response = await fetch(`${apiBaseUrl}/user/${id}`, { method: 'DELETE' });
    return response.json();
  },
};
