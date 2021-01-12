<template>
    <div>
        <div id="slider" class="mui-slide">
            <!-- 这个滑动功能，明显是js功能，而这里只用了css，所以滑动不会生效 -->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							体育
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							游戏
						</a>
					</div>
				</div>

			</div>
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
        return {}
    },
    mounted() { //声明周期钩子函数，当组件中的dom元素被放到页面中后执行！！
        mui('.mui-scroll-wrapper').scroll({ //初始化slider
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{

    },
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y; //css属性：用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。不设置的话，新版google浏览器的滑动事件会报这个警告
}
</style>