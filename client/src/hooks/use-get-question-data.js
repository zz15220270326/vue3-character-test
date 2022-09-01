import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { debounce } from '@/libs/utils';

export default () => {
  const store = useStore();
  const router = useRouter();

  const state = reactive({
    mainTitle: '性格测评-首页',
    formData: {
      level: '',
    },
    selectorList: [
      {
        label: '4道题目',
        value: '',
      },
      {
        label: '12道题目',
        value: 'senior',
      },
    ]
  });
  const {
    formData,
    selectorList,
    mainTitle,
  } = toRefs(state);

  const onTestBtnClick = debounce(async () => {
    await store.dispatch('question/SET_QUESTION_DATA', formData.value);
    router.push('/exam');
  });

  return {
    formData,
    mainTitle,
    selectorList,
    onTestBtnClick,
  };
}