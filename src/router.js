import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Домашняя страница',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/signup',
      name: 'Регистрация',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/signin',
      name: 'Авторизация',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/email-confirmation',
      name: 'Подтверждение почты',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/password-reset',
      name: 'Сброс пароля',
      component: () => import('./views/Home.vue')
    },
  ]
})
