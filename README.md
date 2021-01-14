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