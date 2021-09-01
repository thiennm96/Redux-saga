/* eslint-disable import/no-cycle */
import AdminHomepage from '../containers/AdminHomepage';
import Taskboard from '../containers/Taskboard';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'INPROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: 'Admin page',
    path: '/admin',
    exact: true,
    component: () => <AdminHomepage />,
  },
  {
    name: 'Task Management',
    path: '/admin/task-board',
    exact: false,
    component: () => <Taskboard />,
  },
];

export const ROUTES = [
  {
    name: 'Login',
    path: '/login',
    exact: false,
    component: () => <LoginPage />,
  },
  {
    name: 'Sign Up',
    path: '/signup',
    exact: false,
    component: () => <SignupPage />,
  },
];
