

import Vue from "vue";
import VueRouter from "vue-router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 一个进度条插件
// import NProgress from "nprogress";
import "nprogress/nprogress.css";

import {
  registerMicroApps,
  // addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";

// 子应用注册信息
import apps from "./micro-apps";

import App from "./App.vue";
import routes from "./routes";

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  // beforeLoad: (app) => {
  //   // 加载子应用前，加载进度条
  //   NProgress.start();
  //   console.log("before load", app.name);
  //   return Promise.resolve();
  // },
  // qiankun 生命周期钩子 - 挂载后
  // afterMount: (app) => {
  //   // 加载子应用前，进度条加载完成
  //   NProgress.done();
  //   console.log("after mount", app.name);
  //   return Promise.resolve();
  // },
});

start({

})

Vue.use(VueRouter);
Vue.use(Antd);
Vue.config.productionTip = false;

// 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
let router = new VueRouter({
  // 运行在主应用中时，添加路由命名空间 /vue
  base: "/",
  mode: "history",
  routes,
});

// 挂载应用
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#main-app");