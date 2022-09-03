import axios from 'axios';
import { BASE_REQUEST_CONFIG } from './configs';
import Toast from '@/components/toast';

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
      if (res.data.error_code) {
        Toast({
          message: res.data.reason || 'Error',
        });
      }
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
      console.log(res.data);
      if (res.data.error_code) {
        Toast({
          message: res.data.reason || 'Error',
        });
      }
      success(res.data);
    })
    .catch(err => {
      fail(err);
    });
}
