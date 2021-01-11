<template>
    <div class='header-padding'>
      <!-- 顶部header区域 -->
      <mt-header fixed title="vue-demo"></mt-header>
        <div>
            <h1>123</h1>
            
        </div>        


        <div>
            <!-- 直接套用mui的样式！！！ -->
            <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.header-padding{
    padding-top: 40px;
}
</style>