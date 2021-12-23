import axios, { AxiosInstance } from 'axios';
import { off } from 'process';
import { toast } from 'react-toastify';
import { URLS } from './constants';
import { PollData } from './interfaces';

export const axiosReq: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
});

const axiosReqShort: AxiosInstance = axios.create({
  baseURL: URLS.KZILLA_XYZ_SHORTEN_URL,
  headers: {
    authorization: process.env.REACT_APP_KZILLA_XYZ,
    'Content-Type': 'application/json',
  },
});

export const handelData = async (payload: PollData, validTill: number, token: string): Promise<boolean> => {
  try {
    const res = await axiosReq.post(`${URLS.BASE_URL}/data`, { ...payload, validTill, token });
    if (!res.status) {
      errorHandler(res.data);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const shortenURL = async (longUrl: string): Promise<string> => {
  try {
    const res: any = await axiosReqShort.post(URLS.KZILLA_XYZ_SHORTEN_URL, JSON.stringify({ longUrl: longUrl }));
    return res.data.shortCode;
  } catch (error) {
    return 'There is some error';
  }
};

export const errorHandler = (msg: string) => {
  toast.error(msg, { pauseOnHover: false });
};

export const successHandler = (msg: string) => {
  toast.success(msg, { pauseOnHover: false });
};
