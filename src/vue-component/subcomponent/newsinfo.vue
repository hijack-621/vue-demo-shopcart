<template>
    <div class='newsinfo-container'>
        <!-- 进来新闻详情页 应该立马获取到路由id，然后根据id展示相应的新闻详情
            引入vue-router后 可以通过 $route.params.id 拿到 路由传参的id
         -->
        <!-- <h3>这是id为{{ id }}的新闻详情页</h3> -->
        <h3 class="title">这是id为{{ id }}的新闻标题</h3>
        <p class="subinfo">
            <span>发表时间:</span>
            <span>点击:0次</span>
        </p>
        <hr>
        <div class="content">
            这是新闻的具体内容
        </div>
        <!-- 下面是 评论模块，有时候，很多功能版块下面都需要用到评论这个模块，
        所以这个评论模块需要被定义为一个公共的组件，谁需要用到就将其注册到当前vue组件后使用即可 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
import comments from './comments.vue'
//导入评论公共组件

export default {
    data(){
        return {
            id:this.$route.params.id //将 route地址参数中id赋给vue组件自己的data参数
        }
    },
    methods:{

    },
    components:{ //将comments公共组件注册为局部子组件
        'comment-box':comments,
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px 55px 4px;
    h3{
        font-size:14px;
        text-align: center;
        color:red;
    }
    p{
        display:flex;
        justify-content:space-between;
    }
    .content{
        padding:0 ;
    }
}
</style>