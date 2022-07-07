import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import { setupListeners } from '@reduxjs/toolkit/query';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';
import logger from 'redux-logger';

import reducer from './modules';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({ 
    reducer: {
      reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

const createStore = () => store;
sagaMiddleware.run(rootSaga);
// 옵셔널, refetchOnFocus/refetchOnReconnect 기능을 위해 필요함
// setupListeners 문서를 참고 - 커스텀을 위한 옵셔널 콜백을 2번째 인자로 받음
setupListeners(store.dispatch);
// rootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch 타입 정의
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV !== 'production',
});
