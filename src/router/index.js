import Vue from 'vue';
import VueRouter from 'vue-router';
import Jobs from '../views/Jobs.vue';
import Register from '../views/Register.vue';
import Apresent from '../components/Apresent';
import Apresent2 from '../components/Apresent2';
import Search from '../components/Search';

import CiaoVuePopup from 'ciao-vue-popup'
Vue.use(CiaoVuePopup)

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Apresent',
    component: Apresent,
},
{
  path: '/',
  name: 'Search',
  component: Search,
},
{
  path: '/',
  name: 'Apresent2',
  component: Apresent2,
},

    {
        path: '/register',
        name: 'Register',
        component: Register,
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
