import Vue from 'vue';
import Router from 'vue-router';
import AddStoryList from '@/pages/AddStoryList';
import SprintPlanning from '@/pages/SprintPlanning';
import SprintPlanningForDev from '@/pages/SprintPlanningForDev';
import Result from '@/pages/Result';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddStoryList',
      component: AddStoryList,
    },
    {
      path: '/sprint/:story',
      name: 'SprintPlanning',
      component: SprintPlanning,
    },
    {
      path: '/sprint/:story/:id',
      name: 'SprintPlanningForDev',
      component: SprintPlanningForDev,
    },
    {
      path: '/result/',
      name: 'Result',
      component: Result,
    },
  ],
});
