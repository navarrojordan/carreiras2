import Vue from 'vue';
import VueRouter from 'vue-router';
import Jobs from '../views/Jobs.vue';
import Home from '../views/Home.vue';
import CiaoVuePopup from 'ciao-vue-popup'
Vue.use(CiaoVuePopup)

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
   },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
