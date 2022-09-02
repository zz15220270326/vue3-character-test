import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { toRefs, onMounted } from 'vue';
import Toast from '@/components/toast';
import { SET_ANSWER_DATA } from '@/store/answer/types';

export default ({ pageName }) => {
  const store = useStore();
  const router = useRouter();

  const {
    questionData
  } = toRefs(store.state.question);

  onMounted(() => {
    switch (pageName) {
      case 'IndexPage':
        break;
      case 'ExamPage':
        if (!questionData.value.length) {
          Toast({
            message: '暂无考试内容, 请重新开始',
            duration: 2000,
            onClosed: () => {
              router.push('/');
            }
          });
          return;
        }
        store.dispatch(`answer/${ SET_ANSWER_DATA }`, questionData.value);
      default:
        break;
    }
  });

  return {
    questionData,
  };
}