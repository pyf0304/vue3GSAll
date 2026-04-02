import type { RouteRecordRaw } from 'vue-router';
import { LOGIN_NAME } from '@/router/constant';

/**
 * layout布局之外的路由
 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login1',
  name: LOGIN_NAME,
  //component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  component: () => import(/* webpackChunkName: "login" */ '@/views/web/Index1.vue'),
  // component: () => import(/* webpackChunkName: "login" */ '@/viewsShare/test/about.vue'),
  meta: {
    title: '登录',
  },
};
export default [LoginRoute];
