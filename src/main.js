import Vue from 'vue'
import app from './app.vue'

import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'

//如果css 样式中有用到 字体文件等，需要用file-loader处理！！！

Vue.config.devtools = true;
Vue.component(Header.name, Header);

let vm = new Vue({
    el:'#app',
    render:function(template){
        return template(app)
    }

})