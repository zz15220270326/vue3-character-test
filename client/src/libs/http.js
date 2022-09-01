import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: 'http://localhost:5200',
  timeout: 5 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
  },
};

export function axiosGet({
  options = {},
  success = () => {},
  fail = () => {}
}) {
  axios({
    ...DEFAULT_CONFIG,
    ...options
  })
    .then(res => {
      success(res.data);
    })
    .catch(err => {
      fail(err);
    });
}

export function axiosPost({
  options = {},
  success = () => {},
  fail = () => {}
}) {
  axios({
    ...DEFAULT_CONFIG,
    ...options,
    method: 'POST',
  })
    .then(res => {
      success(res.data);
    })
    .catch(err => {
      fail(err);
    })
}
