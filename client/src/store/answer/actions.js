import {
  SET_ANSWER_DATA,
  UPDATE_ANSWER_DATA,
  CLEAR_ANSWER_DATA,
  SUBMIT_ANSWER_DATA,
  SET_CHARACTER_INFO,
} from './types';
import { submitAnswerData } from '@/services/indexModel';

export default {
  [SET_ANSWER_DATA]({ commit }, payload) {
    if (!payload instanceof Array) {
      return;
    }
    const questionData = [...payload],
          answerData = questionData.map(() => '');

    commit(SET_ANSWER_DATA, answerData);
  },
  [UPDATE_ANSWER_DATA]({ commit }, { index, item }) {
    commit(UPDATE_ANSWER_DATA, { item, index });
  },
  async [SUBMIT_ANSWER_DATA]({ commit }, answerData) {
    if (![4, 12].includes([...answerData].length)) {
      return;
    }
    const answers = [...answerData].join(',');
    const {
      error_code: errorCode,
      data = {},
    } = await submitAnswerData({ answers });
    if (!!errorCode) {
      return;
    }
    commit(SET_CHARACTER_INFO, data);
  },
  [CLEAR_ANSWER_DATA]({ commit }) {
    commit(CLEAR_ANSWER_DATA);
  },
};
