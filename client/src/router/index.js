import { createRouter, createWebHashHistory } from 'vue-router';

import IndexPage from '@/pages/IndexPage';

export default createRouter({
  routes: [
    {
      name: 'IndexPage',
      path: '/',
      component: IndexPage,
    },
    {
      name: 'ExamPage',
      path: '/exam',
      component: () => import('@/pages/ExamPage'),
    },
    {
      name: 'ResultPage',
      path: '/result',
      component: () => import('@/pages/ResultPage'),
    },
    {
      name: 'NotFoundPage',
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404'),
    }
  ],
  history: createWebHashHistory(),
});
