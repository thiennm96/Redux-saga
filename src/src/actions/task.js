import * as taskConstants from '../constanst/task';
import { STATUSES } from '../constanst';

export const fetchListTask = (params = {}) => ({
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    },
});

export const fetchListTaskSuccess = (data) => ({
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
});

// B1: fetchListTaskRequest()
// B2: reset: state task => []
// B3: fetchListTaskSuccess(data res)

export const fetchListTaskFailed = (err) => ({
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err,
    },
});

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTask = (title, detail) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title,
    detail,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = (err) => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    err,
  },
});

export const editTask = (task) => ({
  type: taskConstants.EDIT_TASK,
  payload: {
    task,
  },
});

export const updateTask = (title, detail, status = STATUSES[0].value) => ({
  type: taskConstants.UPDATE_TASK,
  payload: {
    title,
    detail,
    status,
  },
});

export const updateTaskSuccess = (data) => ({
  type: taskConstants.UPDATE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const updateTaskFailed = (err) => ({
  type: taskConstants.UPDATE_TASK_FAILED,
  payload: {
    err,
  },
});

export const deleteTask = (id) => ({
  type: taskConstants.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteTaskSuccess = (data) => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const deleteTaskFailed = (err) => ({
  type: taskConstants.DELETE_TASK_FAILED,
  payload: {
    err,
  },
});
