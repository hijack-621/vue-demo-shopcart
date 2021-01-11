<template>
    <div class='header-padding'>
      <!-- 顶部header区域 -->
      <mt-header fixed title="vue-demo"></mt-header>
        <div>
            <transition >
                <!-- 动画切换效果，需要将组件放在transition中 并设置两组类 -->
             <router-view></router-view>
            </transition>
           
            
        </div>        


        <div>
            <!-- 直接套用mui的样式！！！ -->
            <nav class="mui-bar mui-bar-tab">
                <!-- 将a  连接用 router-link替换，以实现点击路由切换不同的组件！！！ -->
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.header-padding{
    padding-top: 40px;
    overflow-x: hidden; //transform: translateX(100%); 设置这个向x轴移动的属性后，当触发动画时，document会出x轴滚定条，所以组件切换时候，header和底部nav导航会不固定
}
.v-enter{ //这两组类写一样的样式，会出现切换时，消失和出现的方向是相反的，假如这样 《---进来，那么出去 ---》方向就是这样，体验不好
    opacity:0;
    transform: translateX(100%);
}
 .v-leave-to{ //吧离开的动画类和进来的时候分开写，并且transform 移动位置相反，就可以组件《--- 这方向进来，离开消失也是《---这个方向
      opacity:0;
    transform: translateX(-100%);
    position: absolute;
 }
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
}
</style>