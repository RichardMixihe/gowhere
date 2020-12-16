// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引静态css文件
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

// 使用Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

//使用评分
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'
Vue.use(rate);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
