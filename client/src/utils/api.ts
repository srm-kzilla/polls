import axios, { AxiosInstance } from 'axios';
import { load } from 'recaptcha-v3';
import { toast } from 'react-toastify';
import { URLS } from './constants';
import { PollData } from './interfaces';

export default async function getRecaptchaToken(action: string) {
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const recaptcha = await load(siteKey!);
  const token = await recaptcha.execute(action);

  return token;
}

export const axiosReq: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
});

axiosReq.interceptors.request.use(async function (recdConfig) {
  let config = recdConfig;
  if (
    recdConfig.method?.toUpperCase() === 'PUT' ||
    recdConfig.method?.toUpperCase() === 'POST' ||
    recdConfig.method?.toUpperCase() === 'DELETE' ||
    recdConfig.method?.toUpperCase() === 'PATCH'
  ) {
    const recaptchaToken = await getRecaptchaToken(recdConfig.method); // returns token
    config.headers.common['x-recaptcha-token'] = recaptchaToken;
  }
  return config;
});

const axiosReqShort: AxiosInstance = axios.create({
  baseURL: URLS.KZILLA_XYZ_SHORTEN_URL,
  headers: {
    authorization: process.env.REACT_APP_KZILLA_XYZ,
    'Content-Type': 'application/json',
  },
});

export const postData = async (payload: PollData, validTill: number): Promise<boolean> => {
  try {
    const res = await axiosReq.post('/data', { ...payload, validTill });
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
