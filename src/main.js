import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'
import axios from './http/http.js'
import Urls from './url/index'
import App from './App'
import router from '../src/router/index'
import $ from 'jquery'
import 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import MetaInfo from 'vue-meta-info'
import 'babel-polyfill'

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper)


// Vue.use(MetaInfo)


Vue.prototype.$http = axios
Vue.prototype.URLS = Urls

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

    window.onscroll = null;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    next();
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})