<template>
  <div class="page-container">
    <my-header>
      <template #default>
        <h2>{{ mainTitle }}</h2>
      </template>
    </my-header>
    <main>
      <infos
        v-if="Object.keys(characterInfo).length"
        v-bind="characterInfo"
      ></infos>
    </main>
    <footer class="tool-group">
      <my-button
        size="large"
        @click="onBackIndexPage"
      >
        返回首页
      </my-button>
    </footer>
  </div>
</template>

<script setup>
import Infos from '@/components/character-info';
import Toast from '@/components/toast';

import { reactive, toRefs, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { CLEAR_QUESTION_DATA } from '@/store/question/types';
import { CLEAR_ANSWER_DATA } from '@/store/answer/types';

const store = useStore();
const router = useRouter();

const state = reactive({
  mainTitle: '测评结果'
});
const {
  mainTitle,
} = toRefs(state);

// const {
//   characterInfo
// } = toRefs(store.state.answer);

const characterInfo = computed(() => store.state.answer.characterInfo);

const onBackIndexPage = () => {
  store.dispatch(`question/${ CLEAR_QUESTION_DATA }`);
  store.dispatch(`answer/${ CLEAR_ANSWER_DATA }`);
  router.push('/');
}

onMounted(() => {
  if (!Object.keys(characterInfo.value).length) {
    Toast({
      message: '信息丢失, 请重新测试',
      duration: 3000,
      onClosed: () => {
        onBackIndexPage();
      }
    });
  }
});

</script>

<style lang="scss" scoped>
.page-container {

  .tool-group {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    text-align: center;
    padding: .5rem 0;
    box-sizing: border-box;
    box-shadow: 0 -.05rem .2rem #ddd;
  }
}

</style>