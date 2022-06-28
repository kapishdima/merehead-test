import { RootState } from '../../../../app/store';

export const loadingSelector = (store: RootState) => store.userState.loading;
