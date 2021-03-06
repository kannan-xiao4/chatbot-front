import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Chat from '@/views/Chat.vue';

import FirebaseBase from '@/components/FirebaseBase.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/chat',
      component: FirebaseBase,
      children: [
        {
          path: '/',
          name: 'Chat Page',
          component: Chat,
        },
        {
          path: 'login',
          name: 'Chat Login',
          component: Login,
        },
        {
          path: 'signup',
          name: 'Chat Signup',
          component: Signup,
        },
      ],
    },
  ],
});
