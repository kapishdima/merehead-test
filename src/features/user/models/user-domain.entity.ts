import { UserResponseEntity } from './user-response.entity';

export type UserDomainEntity = {
  id: number;
  name: string;
  surname: string;
  description: string;
};

export const toDomain = (user: UserResponseEntity): UserDomainEntity => {
  return {
    id: user.user_id,
    name: user.name,
    surname: user.surname,
    description: user.desc,
  };
};
