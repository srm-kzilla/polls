export const URLS = {
  BASE_URL: process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:5000',
  USER_URL: process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_USER_URL : 'http://localhost:3000/',
  KZILLA_XYZ_URL: 'https://kzilla.xyz/',
  KZILLA_XYZ_SHORTEN_URL: 'https://kzilla.xyz/api/v1/webhook/link',
};

export const SOCKET_EVENTS = {
  CONNECT: 'connection',
  GET_DATA: 'GET_DATA',
  SEND: 'SEND_DATA',
  VOTE: 'SEND_VOTE',
  RESPONSE: 'RESPONSE',
  DATA: 'DATA',
  UPDATE: 'UPDATE',
};
