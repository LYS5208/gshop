import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

//加载过滤器
import './filters/index'

import './mock/mockServer' //加载mockserve

//注册全局组件
Vue.component(Button.name,Button) //<mt-button>

Vue.use(VueLazyload,{ //内部有自定义指令v-load
    loading
})

Vue.config.productiontip = false;

new Vue({
    el:'#app',
    render:h=>h(App),
    router, //使用vue-router
    store //使用上vuex
})