import { axiosGet, axiosPost } from '../libs/http';
import { APIS } from '../libs/configs';

export function getquestionData(params = {}) {
  return new Promise((resolve, reject) => {
    axiosGet({
      options: {
        params,
        url: APIS.GET_Q_DATA,
      },
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    })
  });
}

export function submitAnswerData(formData = {}) {
  const data = new URLSearchParams();
  
  for (let k in formData) {
    data.append(k, formData[k]);
  }

  return new Promise((resolve, reject) => {
    axiosPost({
      options: {
        data,
        url: APIS.SUBMIT_AWR,
      },
      success(data) {
        resolve(data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}
