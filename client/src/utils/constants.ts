export default {
  baseURL: 'http://localhost:5000',
  userURL: 'http://localhost:3000/user/',
};

export const socketEvents = {
  CONNECT: 'connection',
  GET_DATA: 'GET_DATA',
  SEND: 'SEND_DATA',
  VOTE: 'SEND_VOTE',
  RESPONSE: 'RESPONSE',
  DATA: 'DATA',
  UPDATE: 'UPDATE',
};
