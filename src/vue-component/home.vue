<template>
  <div>
    <!-- mint-ui 轮播图组件 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imglist" :key="item.url">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 功能区 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <!-- 类似于 bootstrap、layui的  栅格系统 一行分为12 份 mui-col-sm-4 表示一个格子占四份，自然一行就放三个li了  -->
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">媒体库</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">关于我们</div>
          </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imglist: [
        { img: "../lib/img/jl1.jpg", url: "../lib/img/jl1.jpg" },
        { img: "../lib/img/jl2.jpg", url: "../lib/img/jl2.jpg" },
        { img: "../lib/img/jl3.jpg", url: "../lib/img/jl3.jpg" },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item:nth-child(1) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: green;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: blue;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>