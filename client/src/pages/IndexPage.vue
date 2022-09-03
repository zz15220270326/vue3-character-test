<template>
  <div ref="pageEl" class="page-container">
    <my-header>
      <template #default>
        <h2>{{ mainTitle }}</h2>
      </template>
    </my-header>
    <div class="scroll-wrapper">
      <main class="container scroll-content">
        <nav class="main-nav">
          <h3>个性测评考试</h3>
        </nav>
        <div class="inner-box">
          <p class="exam-desc">
            根据用户填写的心理测试题，经过MBTI理论和指标模型的分析，最终得到人格测试报告。（测得的结果仅供参考娱乐。）
          </p>
        </div>
        <footer class="selector-group">
          <select-level-list
            title="请选择测试的题目个数："
            :list="selectorList"
            v-model="formData.level"
          ></select-level-list>
          <div class="btn-group">
            <my-button
              type="primary"
              size="large"
              @click="onTestBtnClick"
            >
              开始测试
            </my-button>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import SelectLevelList from '@/components/select-level-list';
import { useGetQuestionData, useBscroll } from '../hooks';

const {
  mainTitle,
  formData,
  selectorList,
  onTestBtnClick,
} = useGetQuestionData();
useBscroll({});

</script>

<style lang="scss" scoped>
.page-container {
  
  .scroll-wrapper {
    height: 100vh;
  }

  .container {
    flex-direction: column;

    .main-nav {
      text-align: center;
      padding: .05rem 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
    .inner-box {
      width: 100%;
      padding: .1rem;
      text-align: center;
      border: 1px solid #ddd;
      box-sizing: border-box;

      .exam-desc {
        text-align: left;
        font-size: .13rem;
      }
    }
    .selector-group {
      text-align: center;
      padding: .05rem;
      box-sizing: border-box;
      .select-level-box {
        padding: .1rem;
        box-sizing: border-box;
      }
    }
    .btn-group {
      padding: .05rem 0;
      margin-top: .05rem solid #ddd;
      box-sizing: border-box;
    }
  }
}
</style>