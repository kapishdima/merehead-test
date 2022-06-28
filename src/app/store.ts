import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/store/reducer';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ userState: userReducer });

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type GlobalStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
