import { takeLatest, all } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import * as TemplateSaga from './template';

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point
export default function* rootSaga() {
  // takeEvery -> 한번 실행되도, 이벤트 계속 리슨 (모든 request에 대해 태스크 실행)
  // takeLatest -> 클릭 실수로 2번 했을때, 앞 이벤트 무시 마지막 이벤트 실행
  yield all([
    takeLatest(sagaActions.ADD_TEMPLATE, TemplateSaga.incrementSaga),
    takeLatest(sagaActions.DELETE_TEMPLATE, TemplateSaga.decrementSaga),
  ]);
}