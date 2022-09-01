<template>
  <div class="select-level-box">
    <nav>
      <label for="">{{ title }}</label>
    </nav>
    <span
      class="check-box-wrap"
      v-for="item of list"
      :key="item.value"  
    >
      <input type="radio" :value="item.value" v-model="modelValue" @change="onValueChange" />
      <label class="radio-label">{{ item.label }}</label>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '请选择测试的题目个数：',
  },
  list: {
    type: Array,
    default() {
      return [];
    }
  },
  modelValue: {
    type: String,
    default: '',
  }
});
const emits = defineEmits(['update:modelValue']);

const onValueChange = (e) => {
  emits('update:modelValue', e.target.value);
}

</script>

<style lang="scss" scoped></style>