import { toast } from 'react-toastify';

export const toastError = (err) => {
  let mess = null;
  if (typeof err === 'object' && err.mess) {
    ({ mess } = err);
  }
  if (mess !== null && typeof mess !== 'undefined' && mess !== '') {
    toast.error(mess);
  }
};

export const toastSuccess = (mess) => {
  if (mess !== null && typeof mess !== 'undefined' && mess !== '') {
    toast.success(mess);
  }
};
