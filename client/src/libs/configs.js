const BASE_URL = '/api';

const APIS = {
  GET_Q_DATA: '/character-exam/start',
  SUBMIT_AWR: '/character-exam/submit',
};

const BASE_REQUEST_CONFIG = {
  baseURL: BASE_URL,
  timeout: 5 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
  },
};

export {
  BASE_URL,
  APIS,
  BASE_REQUEST_CONFIG,
};
