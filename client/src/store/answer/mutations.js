import {
  SET_ANSWER_DATA,
  UPDATE_ANSWER_DATA,
  CLEAR_ANSWER_DATA,
  SET_CHARACTER_INFO,
} from './types';

export default {
  [SET_ANSWER_DATA](state, answerData) {
    state.answerData = [...answerData];
  },
  [UPDATE_ANSWER_DATA](state, { item, index }) {
    state.answerData = state.answerData.map((itm, idx) => {
      if (idx === itm) {
        return item;
      }
      return itm;
    });
  },
  [CLEAR_ANSWER_DATA](state) {
    state.answerData = [];
  },
  [SET_CHARACTER_INFO](state, characterInfo) {
    state.characterInfo = characterInfo;
  }
};