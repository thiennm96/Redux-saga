import qs from 'query-string';
import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constanst';

const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = (data) => axiosService.post(`${API_ENDPOINT}/${url}`, data);

export const updateTask = (data, taskID) => axiosService.put(`${API_ENDPOINT}/${url}/${taskID}`, data);

export const deleteTask = (taskID) => axiosService.delete(`${API_ENDPOINT}/${url}/${taskID}`);
