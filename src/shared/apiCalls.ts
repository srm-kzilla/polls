import axios, { AxiosInstance } from 'axios';
import config from '../config';
import { URLS } from './utils';

const axiosReq: AxiosInstance = axios.create({
  baseURL: config.xyzSecretKey,
  headers: {
    authorization: config.xyzSecretKey,
    'Content-Type': 'application/json',
  },
});

export const shortenURL = async (longUrl: string): Promise<string> => {
  try {
    const res: any = await axiosReq.post(URLS.KZILLA_XYZ_SHORTEN_URL, JSON.stringify({ longUrl: longUrl }));
    return res.data.shortCode;
  } catch (error) {
    return 'There is some error';
  }
};
