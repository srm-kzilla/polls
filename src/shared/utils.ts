import { DateTime } from 'luxon';

export const isValid = (createdAt: number, valid: number): boolean => {
  const currDate = getDate();
  var diff = (currDate - createdAt) / 1000;
  diff /= 60 * 60;

  var diffHours = Math.abs(Math.floor(diff));

  return diffHours < valid;
};

export const URLS = {
  KZILLA_XYZ_URL: 'https://kzilla.xyz/',
  KZILLA_XYZ_SHORTEN_URL: 'https://kzilla.xyz/api/v1/webhook/link',
};

export const getDate = () => {
  var date = DateTime.now().setZone('America/New_York').toMillis();
  return date;
};
