import {
 fork, take, call, put, delay, takeLatest, takeEvery, select,
} from 'redux-saga/effects';
import * as taskTypes from '../constanst/task';
import {
 addTask, deleteTask, getList, updateTask,
} from '../apis/task';
import { STATUS_CODE, STATUSES } from '../constanst';
import {
  addTaskFailed,
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
  updateTaskSuccess, updateTaskFailed, deleteTaskSuccess, deleteTaskFailed,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK); // when this action implement => active code
    yield put(showLoading());
    const { params } = action.payload;
    const res = yield call(getList, params);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
 }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({
      q: keyword,
    }));
}

function* addTaskSaga({ payload }) {
  const { title, detail } = payload;
  yield put(showLoading());
  const res = yield call(addTask, {
    title,
    detail,
    status: STATUSES[0].value,
  });
  const { data, status } = res;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, detail, status } = payload;
  const editTask = yield select((state) => state.task.editTask);
  yield put(showLoading());
  const res = yield call(
    updateTask,
    { title, detail, status },
    editTask.id,
  );
  const { data, status: statusCode } = res;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const res = yield call(deleteTask, id);
  const { data, status: statusCode } = res;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
