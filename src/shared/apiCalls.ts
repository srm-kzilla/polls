import axios from 'axios';
import config from '../config';
import { URLS } from './utils';

export const shortenURL = async (longUrl: string): Promise<string> => {
  const res: any = await axios.post(URLS.KZILLA_XYZ_SHORTEN_URL, JSON.stringify({ longUrl: longUrl }), {
    headers: {
      authorization: config.xyzSecretKey,
      'Content-Type': 'application/json',
    },
  });
  return res.data.shortCode;
};
