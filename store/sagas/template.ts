import { put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { increment, decrement } from '@store/modules/template';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// todo 데이터 가져오기
export function* incrementSaga() {
  try {
    // api 통신 시 call (동기 함수 호출)
    // const result: AxiosResponse = yield call(API.getTodos);
    // put은 특정 액션을 바로 dispatch함
    // yield put(setTodos(result.data));
  } catch (e) {
    yield console.log(e);
  }
}

//  todo 데이터 생성하기
export function* decrementSaga({ payload }: PayloadAction<any>) {
  try {
    // const response: AxiosResponse = yield call(API.createTodo, payload);
    // if (response != null && (response.status == 201 || response.status == 200)) {
    //   // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    //   yield put(addTodo(response.data));
    //   yield toast.success('Todo 리스트를 생성했습니다.', {
    //     autoClose: 1000
    //   }
    //   );
    // }
  } catch (e) {
    yield console.log(e);
    yield toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
      autoClose: 1000
    });
  }
}
