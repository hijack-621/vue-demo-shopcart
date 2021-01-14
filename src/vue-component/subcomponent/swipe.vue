<template>
<!--    这是轮播图组件  -->
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imglist" :key="item.url">
            <img :src="item.url" alt="" :class="{'full':isfull}" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:['imglist','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align:center;
  img {
    height: 100%;
    
  }
}
.full{
  width:100%;
}
</style>