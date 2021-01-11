import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import { Header ,Swipe, SwipeItem } from 'mint-ui'; //使用 mint-ui的hader组件
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'//引入样式文件
import '../lib/css/icons-extra.css'
import router from './router.js'
import VueResource from 'vue-resource'
//import { Swipe, SwipeItem } from 'mint-ui';//使用mint-ui的轮播图组件
//如果css 样式中有用到 字体文件等，需要用file-loader处理！！！



Vue.config.devtools = true;
Vue.use(VueRouter)
Vue.use(VueResource)
//使用 vue-resource 请求数据！！！ use后每一个vue都可以使用这个对象

//挂载 VueRouter到Vue
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe); //将mint-ui组件注册到vue上
Vue.component(SwipeItem.name, SwipeItem);

let vm = new Vue({
    el:'#app',
    render:function(template){
        return template(app)
    },
    router,
    //这种简写方式，只能写router！！！
    //将routes对象挂载到VUE实例上

})