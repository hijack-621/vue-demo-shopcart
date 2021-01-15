# 这是一个简单的vue 小 案例 【初次使用 git仓库  有点小激动！！！】

## 使用 Promise 解决回调地狱！！！！


## 几个重要的问题：
1，图片分享中的导航栏可以滑动后，底部的导航栏无法切换，2，只有进来页面刷新之后才可以滑动
//第二个问题是，vue组件和实例都是有生命周期的，上面对slider的初始化时机不对，
//dom元素都没有被放到document中，初始化无意义
//初始化需要在dom元素被放到页面中后执行才合适！！！

//第一个问题 是因为 mui.js源代码问题，其中 app.vue中的 mui-tab-item 样式名冲突了 导致min.js工作有问题
//将mui样式复制过来，改个名字就好了！！！
3. 使用按需加载mint ui 的懒加载插件时，正在加载的等待效果不生效，可以使用全部导入的方式 【import mintui from 'mint-ui'】解决！！！
4. 缩略图的使用，这里使用 vue-preview 这个插件来实现 【官方 doc https://github.com/LS1231/vue-preview】
    这是实现 一张缩略图的 对象数据：{
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',这是点击缩略图所显示的大图
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',这是缩略图 如果没有吧原图处理成缩略图然后附上链接，就需要自己处理【
                imginfo.vue中使用 deep深层作用选择器将img修改为小图片！！！
            】
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },



## 如何在手机上调试这个网页
    在 package.json 启动服务器的脚本中 加上 --hot --host ip地址 
    注意：【需要保证手机和电脑的网络在统一域名下！！！】
    加上脚本后，运行webpack-dev-server 命令后，在手机浏览器中就可以访问到这个网站！！！【神奇！！！】 


## 除了router-link实现跳转，还可以采用编程式跳转，使用 vue-router的实例方法！！
    (this.)$router.push('sting'/{} ),push可以直接传入 path路由或者一个路由对象，详情见vue-router文档！！！
    使用这个路由对象就可以完成我们的网页前进后退按钮！！！


    (this.)$route
    这两个是不一样的对象，$router 是引入vue-router后vue实例的路由对象，用来使用js代码进行路由跳转， 而 $route 是参数对象，用于来获取路由传递的参数的！！！


## 加入购物车这个动画效果的实现需要注意的问题！！！
    1.不能用vue 提供的那两组动画类，因为是半程动画，需要用到 动画钩子函数
        <transition @before-enter="beforeenter" @enter="enter" @after-enter="afterenter">，其中三个函数需要在methods定义 并写入相应的代码逻辑
    2. 移动位置的获取，调试的时候可以吧移动的终点固定好，看动画效果是否ok
    但是到了实际开发中，移动终点位置不能固定，因为滚定条或者设备分辨率不同时，终点位置坐标就会变
        ---可以借助 dom.getBoundingClientRect()这个方法来求出小球运动到 购物车这个nav的距离坐标，最后 放入到 translate（x,y）中去即可！！！


## VUEX
### 什么是vuex：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
    通俗一点说就是 用一个公共的容器 来存放公共的数据，以便当某些组件需要用到这些公共的数据时，直接去这个公共的容器中拿数据：避免了一些问题【
        比如，1.a是b的父组件，b是c的父组件【也就是组件三层组件嵌套】，a要用到c中的数据时，必须要经过b这个组件做枢纽，但是b又不需要c的数据，此方式开销比较大，b也很尴尬hhh【工具人】
            2.a b直接是两个毫无关联的组件，b想用a中的 msg字段，直接是通信是直接拿不到数据的！！！，需要借助一个临时的vue对象，a b分别取操作这个临时的Vue实例才行，比较麻烦！！！
        
        所以 vuex应运而生，可以解决上述问题！！！
        直接开辟一个公共区域，存在共享关系【这是大前提】的数据往这个区域一放，谁想用就自己去拿【原理就是这样】
    
    】
    总结：.vue 中的data(){},存在自己私有的数据，props存放父组件传来的数据，vuex是一个全局的、存放存在共享关系的数据的仓库！！！

    使用：
    1.直接下载对应的js库，script引入即可
    2.npm  install vuex ,然后 import vue， import vuex  vue.use(vuex) ,当然，既然vuex相当于一个公共仓库，必选先建立一个仓库 【语法：
    const store = new Vuex.Store({
            state: { //类似于组件的data参数，用于存储数据
                count: 0
            },
            mutations: {//类似于组件中的 methods参数，里面存放方法
                increment (state) {
                state.count++
                }
            },
            gettters{
                funcname:funcion(){

                }
            }
            })
    】 
    之后将 这个仓库挂载到vue实例上  类似于 router的，配置完之后，同样要挂载到vue实例上！！！
        【
            new vue({
                el:'',
                data:{},
                router:router,
                store:store,
            })
    】
    获取store仓库中的数据，
    方式一：通过 this.$store【路由 $Route/$router】.state.count 就可以获取到上面 store实例的count值了！！！
    方式二:通过getters[与 state,mutation 平级的参数]，这个getters只负责对外提供数据，组件调用getters里的方法就可以拿到数据，而且组件引用了 getters里面的方法获取state里面的数据，当state数据改变，引入getters
    而得到的数据，在组件内也会被修改

    既然可以获取到，在非store仓库修改【也就是组件内部自己的修改的】也是可以的，但是不推荐，不符合vuex设计理念，vuex设计理念就是 加入 a b c 三个组件都要需要我们的count数据，需要通过一个仓库管理员做中介， a b c吧他们的需求告诉仓库管理员【也就是调用mutations中提供的方法去操作【this.$store.commit('store实例中mutation中的方法名')】 】，有管理员统一去操作数据，避免 组件都去操作数据仓库导致仓库数据混乱！！！【因为错了，无法定位到是哪个组件擅自修改了数据】



## vue 中 watch 监听属性中 使用箭头函数无法获取到 data属性中的任何值！！！

## apache  开启 gzip功能  优化网页数据的请求！！！！
    开启：mod_deflate  mod_headers mod_filter  三个module  并 在 httpd.conf 配置文件末尾 配上【
    <IfModule mod_deflate.c>

    DeflateCompressionLevel 8  

    SetOutputFilter DEFLATE 

    DeflateFilterNote Input instream

    DeflateFilterNote Output outstream

    DeflateFilterNote Ratio ratio 

    AddOutputFilterByType DEFLATE text/html text/plain text/css text/xml text/javascript

    </IfModule>
    】 
    