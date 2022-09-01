import {
  SET_QUESTION_DATA,
  CLEAR_QUESTION_DATA,
} from './types';

export default {
  [SET_QUESTION_DATA](state, questionData) {
    state.questionData = [...questionData];
  },
  [CLEAR_QUESTION_DATA](state) {
    state.questionData = [];
  }
};