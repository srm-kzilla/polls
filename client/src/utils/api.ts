import axios, { AxiosInstance } from 'axios';
import { off } from 'process';
import { toast } from 'react-toastify';
import { URLS } from './constants';
import { PollData } from './interfaces';

export const axiosReq: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
});

export const handelData = async (payload: PollData): Promise<boolean> => {
  try {
    const res = await axiosReq.post(`${URLS.BASE_URL}/data`, payload);
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
