import vuerouter from 'vue-router'
import homevue from './vue-component/home.vue'
import membervue from './vue-component/member.vue'
import shopcartvue from './vue-component/shopcart.vue'
import searchvue from './vue-component/search.vue'

import newlist from './vue-component/subcomponent/newslist.vue'
import newsinfo from  './vue-component/subcomponent/newsinfo.vue'
import shareimg from './vue-component/subcomponent/shareimg.vue'

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
            path:'/home/shareimg', //:id表示这个id是个参数 
            component:shareimg 
         },


    ],
    linkActiveClass:'mui-active'
    //将vuerouter提供的路由高亮的类：touter-link-active替换为mui提供的mui-active类
})

export default router