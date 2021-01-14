import vuerouter from 'vue-router'
import homevue from './vue-component/home.vue'
import membervue from './vue-component/member.vue'
import shopcartvue from './vue-component/shopcart.vue'
import searchvue from './vue-component/search.vue'

import newlist from './vue-component/subcomponent/newslist.vue'
import newsinfo from  './vue-component/subcomponent/newsinfo.vue'
import shareimg from './vue-component/subcomponent/shareimg.vue'
import imginfo from './vue-component/subcomponent/imginfo.vue'
import bgoods from './vue-component/subcomponent/bgoods.vue'
import goodsinfo from './vue-component/subcomponent/goodsinfo.vue'
import goodsparams from './vue-component/subcomponent/desc.vue'
import goodscmt from './vue-component/subcomponent/goodscmt.vue'
let router = new vuerouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },

        {
           path:'/home', 
           component:homevue,
        },
        {
            path:'/member', 
            component:membervue 
         },
         {
            path:'/shopcart', 
            component:shopcartvue 
         },
         {
            path:'/search', 
            component:searchvue 
         },
         {
            path:'/home/newslist', 
            component:newlist 
         },
         {
            path:'/home/newsinfo/:id', //:id表示这个id是个参数 
            component:newsinfo 
         },
         {
            path:'/home/shareimg', 
            component:shareimg 
         },
         {
            path:'/home/imginfo/:id/:categories', //:id表示这个id是个参数 
            component:imginfo 
         },
         {
            path:'/home/bgoods', //:id表示这个id是个参数 
            component:bgoods 
         },
         {
            path:'/home/goodsinfo/:id', //实际应该传参数
           
            component:goodsinfo
         },
         {
            path:'/home/goodsparams/:id',
            name:'goodsparams',
            component:goodsparams,
         },
         {
            path:'/home/goodscmt/:id',
            name:'goodscmt',
            component:goodscmt,
         },
         


    ],
    linkActiveClass:'mui-active'
    //将vuerouter提供的路由高亮的类：touter-link-active替换为mui提供的mui-active类
})

export default router