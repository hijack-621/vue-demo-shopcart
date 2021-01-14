<template>
    <div>
        <div id="slider" class="mui-slide">
            <!-- 这个滑动功能，明显是js功能，而这里只用了css，所以滑动不会生效 -->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<!-- 页面刚显示应该让第一个nav高亮【mui-active】，所以这个高亮的类应该添加上属性绑定，并进行id判断，符合id为第一个的nav就加上这个类 -->
                        <a :class="['mui-control-item',item.id===5 ? 'mui-active' :'']" v-for="item in cates" :key="item.id" @click="getimgbycate(item.id)">
							{{ item.name }}
						</a>
						
					</div>
				</div>
		    </div>
            <!-- 下面展示图片列表 使用 mint-ui的懒加载模块！！！【先引入【import】组件】 -->
                <!-- 图片详情 需要把 每个li用 router-link 代替，然后设置tag属性 将router-link渲染为li！！！！
                    并且 router-link to属性为必须，表示url跳转 ,在且，由于 to属性需要传入 图片的id 所以id要改造成绑定属性!!!
                 -->
                <ul class="cul">
                    <router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/imginfo/' + item.id +'/' +(item.categories[0]['name']) ">
                        <img v-lazy="item.url">
                    </router-link>
                </ul>
    </div>
</template>

<script>
import mui from '../../../lib/js/mui.min.js'
// mui('.mui-scroll-wrapper').scroll({ //初始化slider
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });

//到此还有两个问题：1，可以滑动后，底部的导航栏无法切换，2，只有进来页面刷新之后才可以滑动
//第二个问题是，vue组件和实例都是有生命周期的，上面对slider的初始化时机不对，
//dom元素都没有被放到document中，初始化无意义
//初始化需要在dom元素被放到页面中后执行才合适！！！

//第一个问题 是因为 mui.js源代码问题，其中 app.vue中的 mui-tab-item 样式名冲突了 导致min.js工作有问题
//将mui样式复制过来，改个名字就好了！！！
export default {
    data(){
        return {
            cates:[],
            list:[],
        }
    },
    created() {
        this.getcategory()
        this.getimgbycate(5)
    },
    mounted() { //声明周期钩子函数，当组件中的dom元素被放到页面中后执行！！
        mui('.mui-scroll-wrapper').scroll({ //初始化slider
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getcategory(){
            this.$http.get('https://api.thecatapi.com/v1/categories')
                .then(res=>{
                   // console.log(res)
                   this.cates = res.body
                })
        },
        getimgbycate(cateid){// limit 表示 一次性获取几张图片！！！还有其他参数 可以传递！
            this.$http.get('https://api.thecatapi.com/v1/images/search?limit=6&category_ids='+cateid)
                .then( res=> {
                    console.log(res)
                    this.list = res.body
                })
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y; //css属性：用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。不设置的话，新版google浏览器的滑动事件会报这个警告
}
.cul{
    padding:6px;
    margin:0;
    padding-bottom:0;
    li{
        text-align: center;
        background-color: #ccc;
        img{
            width:100%; //真正图片样式
            margin-bottom:6px;
            vertical-align: middle;   
        }
        img[lazy=loading] 
        {
            // 这是知识懒加载那个转圈动画的样式，并不是真正的图片样式！！！
            width: 40px;
            height: auto;
            margin: auto;
        }
    }
    
}

</style>