import { RootState } from '../../../../app/store';

export const paginationSelector = (store: RootState) => store.userState.pagination;
export const pageSelector = (store: RootState) => store.userState.pagination.page;
