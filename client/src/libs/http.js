import axios from 'axios';
import { BASE_REQUEST_CONFIG } from './configs';

export function axiosGet({
  options = {},
  success = () => {},
  fail = () => {}
}) {
  axios({
    ...BASE_REQUEST_CONFIG,
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
    ...BASE_REQUEST_CONFIG,
    ...options,
    method: 'POST',
  })
    .then(res => {
      success(res.data);
    })
    .catch(err => {
      fail(err);
    });
}
