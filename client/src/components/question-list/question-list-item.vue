<template>
  <div class="q-item">
    <header class="q-item-header">
      <h3>{{ index + 1 }}. {{ item.question }}</h3>
    </header>
    <section class="option-list">
      <div
        class="option-item"
        v-for="(opt, optIdx) of optionList"
        :key="`${ optIdx } ${ opt.value }`"
      >
        <!-- {{ `answerData${index + 1}: ${ answerData[index] }` }} -->
        <input
          type="radio"
          :value="opt.value"
          v-model="answerData[index]"
          @change="onCheckValue(opt.value)"
        />
        <label for="">{{ opt.label }}</label>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    }
  },
  index: {
    type: Number,
    default: -1,
  }
});

const store = useStore();

const optionList = computed(() => {
  return ['A', 'B', 'C', 'D'].reduce((list, item) => {
    if (
      props.item.hasOwnProperty(`option${ item }`)
      && props.item.hasOwnProperty(`option${ item }Value`)
    ) {
      list.push({
        label: props.item[`option${ item }`],
        value: props.item[`option${ item }Value`],
      });
    }

    return list;
  }, []);
});

const {
  answerData
} = toRefs(store.state.answer);

const onCheckValue = (value) => {
  console.log(props.index, value);
}

</script>

<style lang="scss" scoped>
.q-item {
  padding: .6rem;
  box-sizing: border-box;
  box-shadow: 0 .03rem .12rem #ddd;

  .q-item-header {
    font-size: .88rem;
  }

  .option-list {
    width: 100%;
    padding: .3rem 0;
    box-sizing: border-box;
    font-size: .66rem;

    .option-item {
      margin-left: .3rem;
      margin-top: .25rem;
    }
  }
}
</style>