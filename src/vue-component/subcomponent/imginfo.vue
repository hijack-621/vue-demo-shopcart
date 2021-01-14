<template>
   <div class="info-box">
        <h3>这是id为 {{ id }}图片的标题</h3>
        <p>
            <span>发表时间:2020-12-12 12:12:12</span>
            <span>点击:0次</span>
        </p>   
        <hr>

        <!-- 缩略图区域 使用vue集成的photoswipe图片预览插件！！！npm install vue-preview -D -->
         <div class="thumbs">
             <vue-preview :slides="slider1" @close="handleClose"></vue-preview>
         </div>
         
        
        <!-- 图片详情内容区域 -->
        <div class="img-content">这是图片的categories: {{ url }}</div>
        <!-- 评论区 -->
        <comment-box></comment-box>
    </div> 
</template>

<script>
import comments from './comments.vue'
export default {
    data(){
        return {        
            id:this.$route.params.id,
            url:this.$route.params.categories,
            slider1:[]
        }
    },
    created() {
        this.getThumb()
    },
    methods: {
        getThumb(){
            this.$http.get('https://api.thecatapi.com/v1/images/search?limit=6&category_ids=14')
                .then(res =>{
                    // console.log(res);
                    res.body.forEach( el =>{
                        el.src = el.url//图片地址
                        el.msrc =el.url//缩略图地址！！！
                        el.w = 600
                        el.h = 400
                    })
                    this.slider1 = res.body
                })

        },
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        'comment-box':comments,
    }
}
</script>

<style lang='scss' scoped>
.info-box{
    h3{
        text-align: center;
        color:#8478f0;
        font-size:15px;
        padding-top: 5px;
    }
    p{
        display: flex;
        justify-content: space-between;
        margin:0 3px 0 3px;

    }
}
.thumbs{
        ::v-deep .my-gallery{   //deep深层作用选择器，/deep/这种写法已经启用 【需要 ::v-deep 这样用 .my-gallery为自定义class name,将被vue-preview 套用！！！ 】默认使用 scoped 后，父组件的样式将不会渗透到子组件中，如果想在使用scoped，不污染全局的情况下，依然可以修改子组件样式，可以使用深度作用选择器
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{//修改figure这个子组件下的img，！！！
                  
                  img{
                      width: 240px;
                      height:160px;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
}
</style>