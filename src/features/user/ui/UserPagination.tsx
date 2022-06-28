import React from 'react';

import { majorScale, Pagination } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';

import { pageSelector } from '../store/selectors/pagination.selector';
import { createChangePageAction } from '../store/actions';

type UserPaginationProps = {
  total: number;
};

export const PAGE_LIMIT = 5;

export const UserPagination: React.FC<UserPaginationProps> = ({ total }) => {
  const totalPages = Math.ceil(total / PAGE_LIMIT);

  const page = useSelector(pageSelector);
  const dispatch = useDispatch();

  const onNextPage = () => {
    dispatch(createChangePageAction(page + 1));
  };

  const onPrevPage = () => {
    dispatch(createChangePageAction(page - 1));
  };

  const onPageChange = (page: number) => {
    dispatch(createChangePageAction(page));
  };

  return (
    <Pagination
      marginTop={majorScale(2)}
      page={page}
      onPreviousPage={onPrevPage}
      onNextPage={onNextPage}
      onPageChange={onPageChange}
      totalPages={totalPages}
    />
  );
};
