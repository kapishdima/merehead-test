import { UserDomainEntity } from '../models/user-domain.entity';

type Pagination = {
  page: number;
};

export type UserState = {
  users: UserDomainEntity[];
  loading: boolean;
  pagination: Pagination;
};

export const initialState: UserState = {
  users: [],
  loading: false,
  pagination: {
    page: 1,
  },
};
