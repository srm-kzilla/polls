import axios, { AxiosInstance } from 'axios';
import constants from './constants';

export const axiosReq: AxiosInstance = axios.create({
  baseURL: constants.baseURL,
});
