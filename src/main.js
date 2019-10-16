// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
import echarts from 'echarts';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';
// import myVideo from 'vue-video';
import videoPlayer from 'vue-video-player';
Vue.use(videoPlayer);
Vue.use(Vant);
Vue.use(Mint);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
