<template>
  <div ref="pageEl" class="page-container">
    <main class="scroll-content">
      <my-header>
        <template #default>
          <h2>{{ mainTitle }}</h2>
        </template>
      </my-header>
      <main class="container">
        <question-list :list="questionData" />
      </main>
      <footer class="submitter">
        <my-button
          type="success"
          size="large"
          @click="onSubmitData"
        >
          提交结果
        </my-button>
      </footer>
    </main>
  </div>
</template>

<script setup>
import QuestionList from '@/components/question-list';
import Toast from '@/components/toast';

import {
  reactive,
  toRefs,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuestionData, useBscroll } from '@/hooks';
import {
  SUBMIT_ANSWER_DATA
} from '@/store/answer/types';

const store = useStore();
const router = useRouter();

const state = reactive({
  mainTitle: '测评中。。。',
});
const {
  mainTitle
} = toRefs(state);
const {
  answerData,
  characterInfo,
} = toRefs(store.state.answer);

const { questionData } = useQuestionData({ pageName: 'ExamPage' });
useBscroll({
  mouseWheel: true,
  click: true,
  tap: true,
  scrollY: true,
  bounceTime: 300,
});

const onSubmitData = async () => {
  const submitData = [...answerData.value];
  const emptyIdx = submitData.findIndex(item => !item);
  if (emptyIdx !== -1) {
    Toast({
      message: `第${ emptyIdx + 1 }道题目不得为空`,
      duration: 1500,
      closeOnClick: true,
    });
  } else {
    await store.dispatch(`answer/${ SUBMIT_ANSWER_DATA }`, submitData);
    if (Object.keys(characterInfo.value).length) {
      router.push('/result');
    }
  }
}

</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 100vh;

  .scroll-content { // don't set height
    // height: 100%;
  }

  .submitter {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2.5rem;
    text-align: center;
    background-color: #fff;
    padding: .2rem;
    box-shadow: 0 .12rem .3rem #ddd;
    box-sizing: border-box;
  }
}
</style>
