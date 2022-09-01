<template>
  <div class="character-info">
    <header>
      <h3 class="c-alphabet">
        人格字母: {{ alphabet }}
      </h3>
      <h3 class="c-name">
        人格名称: {{ `${ occupation } (${ vocabulary })` }}
      </h3>
    </header>
    <desc-list
      title="人格概述: "
      :list="summarize"
    />
    <desc-list
      title="性格描述: "
      :list="desc"
    />
    <analyze :list="characteristic" />
  </div>
</template>

<script setup>
import DescList from './character-info-desc-list.vue';
import Analyze from './character-info-analyze.vue';

const props = defineProps({
  /** 人格字母 */
  alphabet: {
    type: String,
    default: '',
  },
  /** 人格英文 */
  vocabulary: {
    type: String,
    default: '',
  },
  /** 人格中文 */
  occupation: {
    type: String,
    default: ''
  },
  /** 人格概述 */
  summarize: {
    type: Array,
    default() {
      return [];
    },
  },
  /** 性格描述 */
  desc: {
    type: Array,
    default() {
      return [];
    }
  },
  /** 性格特点 */
  characteristic: {
    type: Array,
    default() {
      return [];
    }
  }
});
</script>

<style scoped lang="scss">
  .character-info {
    margin-bottom: 3.8rem;

    .c-alphabet {
      font-size: 1.2rem;
      font-weight: 500;
      // margin: .3rem 0;
    }

    .c-name {
      font-size: 1rem;
      font-weight: 500;
      padding: .5rem 0;
      box-sizing: border-box;
    }
  }
</style>
