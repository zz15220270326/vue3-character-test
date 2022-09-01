import {
  SET_QUESTION_DATA,
  CLEAR_QUESTION_DATA
} from './types';
import { getquestionData } from '@/services';
import { useRouter } from 'vue-router';
import Toast from '@/components/toast';

export default {
  async [SET_QUESTION_DATA]({ commit, state }, formData) {
    const { questionData = [] } = state;
    if (questionData.length) {
      Toast({
        message: '已存在questionData, 无法继续设置'
      });
      return;
    }
    const {
      error_code: errorCode,
      data = [],
    } = await getquestionData(formData);
    if (!errorCode && data?.length) {
      await commit(SET_QUESTION_DATA, data);
    }
  },
  [CLEAR_QUESTION_DATA]({ commit }) {
    commit(CLEAR_QUESTION_DATA);
  }
};