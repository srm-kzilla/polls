import axios, { AxiosInstance } from 'axios';
import { off } from 'process';
import { toast } from 'react-toastify';
import constants from './constants';
import { DataType } from './interfaces';

export const axiosReq: AxiosInstance = axios.create({
  baseURL: constants.baseURL,
});

export const handelData = async (payload: DataType): Promise<boolean> => {
  try {
    const res = await axiosReq.post(`${constants.baseURL}/data`, payload);
    if (!res.status) {
      errorHandler(res.data);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    errorHandler('Something Wrong');
    return false;
  }
};

export const errorHandler = (msg: string) => {
  toast.error(msg);
};
