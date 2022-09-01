import { createStore } from 'vuex';

import question from './question';
import answer from './answer';

export default createStore({
  modules: {
    question,
    answer,
  },
});
