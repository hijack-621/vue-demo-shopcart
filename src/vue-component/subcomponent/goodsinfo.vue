<template>
    <div class='box'>
        <!-- 实现点击加入购物车小球动画，由于是半场动画，所以不能用那两组动画类，只能用半场动画的钩子函数 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
            <!-- 类似于 id vue 通过 $refs.ball 就可以拿到这个dom元素 -->
        </transition>
        


        <!-- 有时候 我们轮播图样式并不都需要设置宽高都为100%，比如主页的可能就需要，子页面仅高度需要，宽度自适应的时候，我们就可以使用样式绑定，当isfull为true的时候就加上样式class .full -->
        <swipe :imglist="imglist" :isfull="false"></swipe>

        <div class="mui-card">
            <div class="mui-card-header">这是商品的标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div>市场价:<del>￥2399</del> 限时价:<span class="tprice">￥2100</span></div>
                        <!-- @ 子向父传值，: 父向子传值！！ -->
                        <p class='px'><span>购买数量:</span><numbox @getcount="getnumsfromNumbox" class='wd' :stock="rstock" ></numbox></p>
                        <mt-button type='primary' size='small'>立即购买</mt-button>
                        <mt-button type='danger' size='small' @click="addtocart" >加入购物车</mt-button>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品编码：</p>
                        <p>商品库存：{{ rstock }}</p>
                        <p>上架时间：</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size='large' plain @click="getdesc('goodsid')">图文介绍</mt-button>
                    <mt-button type='danger' size='large' plain @click="getcmt('goodsid')">商品评论</mt-button>
                </div>
			</div>

    </div>
</template>

<script>
import swipe from './swipe.vue'
import numbox from'./numbox.vue'
export default {
    data(){
        return {
            cateid:this.$route.params.id, 
            imglist:[],
            ballflag:false,
            count:1,//默认进来购买页面的话，购买数量为1
            stock:0,//库存
            rstock:0,
               
        }
        
    },
    components:{
        swipe,
        numbox,
    },
    created() {
       this.getimglist() 
    },
    watch:{
        'stock':function (newval, oldval) {
            this.rstock = this.stock
        }
    },
    methods: {
        getimglist(){
            this.$http.get('https://api.thecatapi.com/v1/images/search?limit=6&category_ids='+this.cateid)
            .then(res=>{
                //console.log(res.body.length)
                this.imglist = res.body;
                this.stock=res.body.length
                //console.log(this.stock)
            })
        },
        getdesc(id){
            this.$router.push({name:'goodsparams', params:{id}})
        },
        getcmt(id){
           this.$router.push({name:'goodscmt', params:{id}})  
        },
        addtocart(){
            this.ballflag = !this.ballflag
        },
        beforeEnter (el) { //此处接受的参数为原生的js dom对象，也就是transition包裹的dom元素对象
                el.style.transform = "translate(0, 0)"
            },
        enter (el,done) {
                el.offsetWidth
                //el.style.transform = "translate(100px, 268px)"
                //但是实际开放中,这个移动的位置是不可能写死的，写死了，当滚动条或者设备分辨率改变时，最终移动位置就变了！！！
                //'这里可以用dom对象的一个方法-getBoundingClientRect()，返回当前选择的dom元素离页面文档的上下左右四个方位的距离,.top 就表示距离顶部，.left就表示距离左边
                
                //获取小球离页面四个方位的距离
                const ballposition = this.$refs.ball.getBoundingClientRect()
                //获取购物车这个nav离页面四个方位的距离
                //用购物车导航栏距离页面顶部和左边的距离减去小球的 就可以得到需要移动的坐标了！！！！
                const badgeposition = document.getElementById('badge_id').getBoundingClientRect()

                const x_left = badgeposition.left - ballposition.left
                const y_top =  badgeposition.top - ballposition.top
                el.style.transform = `translate(${x_left}px, ${y_top}px)`
                //es6 提供的模板字符串，可以解析变量 ${变量} ！！！
                el.style.transition = "all 0.7s ease"
                done() //在leave或者enter钩子函数中，动画完毕之后需要调用这个回调函数done
                //表示立即执行after-eter或者after-leave这个钩子函数
        },
        afterEnter (el) {
                this.ballflag = !this.ballflag
                
        },
        
        getnumsfromNumbox(pcount){//由于 numbox为子组件，而当前的组件对于numbox而言为父组件，要拿到这个加入购物车的数量，就需要实现子组件向父组件传值，$emit()!!!
            //那子组件传来的值放到自己的data属性上
            //并且这个函数需要定义到子组件上
            this.count =pcount 
            //console.log(pcount)
        }

    },
    
}
</script>

<style lang="scss" scoped>
.ball{
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: red;
    top:350px;
    left:142px;
    z-index: 99;
    position:absolute;
    //transform: translate(100px,268px);
}
.mui-card-content-inner{
    .tprice{
        font-size:16px;
        color:red;
        font-weight: bold;
    }
    p{
       display:flex;
       margin-top:10px;
       span{
           line-height:35px;
           padding-right: 5px;
       }
        
    }
}
.mui-card-footer{
    display: block;
    button{
        margin:10px auto;
    }
}
</style>