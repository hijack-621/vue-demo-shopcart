import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
//import { Header ,Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'; //使用 mint-ui的hader组件
//按需加载mint-ui插件，按需加载懒加载插件时，懒加载样式不生效，目前所知可以全部导入mint-ui解决

import mintui from 'mint-ui'

import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'//引入样式文件
import '../lib/css/icons-extra.css'
import router from './router.js'
import VueResource from 'vue-resource'
//import { Swipe, SwipeItem } from 'mint-ui';//使用mint-ui的轮播图组件
//如果css 样式中有用到 字体文件等，需要用file-loader处理！！！

import VuePreview from 'vue-preview'
// defalut install 使用vue  缩略图插件

import vuex from 'vuex'

Vue.config.devtools = true;
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(mintui);
Vue.use(VuePreview)
Vue.use(vuex)

//先获取localstorage中的cart 购物车数量，如果先前加入过的话

let fcart = JSON.parse( localStorage.getItem('cart') || '[]') 

let store = new vuex.Store({
    state:{
        cart:fcart//购物车数据，
    },
    mutations:{
        caddtocart(state,goodsinfo){
            var flag = false 
//判断购物车是否存在已有商品标志位，如果循环完goodinfo flag还是false的说明购物车没有该商品，点击加入购物车就应该吧详细商品信息加入到cart中
//否则 值更新商品的数量

            state.cart.some( item => {
                if(item.id === goodsinfo.id ){
                    flag=true
                    item.count +=  parseInt(goodsinfo.count)
                    return true //找到停止循环
                }
            })
            if(!flag){//购物车原先没有该商品，直接加入购物车
                state.cart.push(goodsinfo)
            }
            //上面得到的只是临时的 数据，我们需要把数据放到 localstorage中！！！

            localStorage.setItem('cart', JSON.stringify(state.cart))//将对象序列成字符串对象

        },
        updatecart(state,goodsinfo){//购物车中修改商品的数量，
            state.cart.some(item=>{
                if (item.id === goodsinfo.id) {
                    item.count = goodsinfo.count;
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        updatestatus(state, goodst){
            state.cart.forEach( item=>{
                if (item.id ===goodst.id){
                    item.selected = goodst.selected
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        delgoods(state,id){
            state.cart.some( (item, i)=>{
                item.id === id
                state.cart.splice(i, 1)
                return true;
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters:{
        getCartTotal:state=>{
            let total = 0;
            state.cart.forEach(item=>{
               total += parseInt(item.count)
            })
            return total 
        },
        getcartcount:state=>{
            let obj = {}
            state.cart.forEach(item=>{
                obj[item.id] = item.count 
            })
            return obj
        },
        getcartstatus:state=>{
            let o = {}
            state.cart.forEach( item=>{
                o[item.id] = item.selected
            })
            return o
        },
        calc:state=>{
            let c =  {
                count:0,
                price:0,
            }
            state.cart.forEach( item =>{
                if(item.selected) {
                    c.count += parseInt(item.count) //注意有时候传递来的是字符型数据，转int后得到相加后的数值
                    c.price += item.price * item.count
                }
            })
            return c
        }


        
        

    }
})
//使用 vue-resource 请求数据！！！ use后每一个vue都可以使用这个对象

//挂载 VueRouter到Vue
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe); //将mint-ui组件注册到vue上
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

let vm = new Vue({
    el:'#app',
    render:function(template){
        return template(app)
    },
    router,
    store,
    //这种简写方式，只能写router！！！
    //将routes对象挂载到VUE实例上

})