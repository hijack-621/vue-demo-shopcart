<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in details_news " :key="item.id">
					<!-- 点击每一条新闻列表进入详细新闻
                        将 a标签用 router-link 替换
                        to="" 写入对应的url地址，每条新闻都必须对应一个unique 唯一的id，不然无法区别点击的是那条新闻
                        需要注意的是，to需要用v-bind绑定，
                         /home/newsinfo/是字符串，而item.id表达式，
                         所以 :to="'/home/newsinfo/' +item.id" 该这么写，前面用引号包裹表示这个是字符串，

                     -->
                    <router-link :to="'/home/newsinfo/' +item.id">

						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
                        <p class="newsTitle">{{item.title}}</p>
                        <p class="mui-ellipsis">
                            <span>{{item.add_time}}</span>
                            <span>点击次数：{{item.click}}</span>
                        </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            details_news:[],
        }
    },
    created() {
        this.getdetails_news()
    },
    methods:{
        getdetails_news(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/getnewslist')
            .then(res=>{
                //console.log(res.body.message)
                this.details_news = res.body.message
            })
            .catch()
        }
    }
}
</script>
<style lang='scss' scoped>
.mui-table-view{
    li{
        h3{
            font-size:15px;
        }
    .mui-ellipsis{
        display:flex;
        justify-content: space-between;//设置这两个属性让两个span与两端对齐【一左一右】
        span{
            font-size:12px;
            color: #0969f8;
            
        }
    }    
    }
}
.newsTitle{
    font-size: 14px;
    color: #000000;
}
.mui-ellipsis span:nth-of-type(1){
    flex: 8;
    font-size: 12px;
}
.mui-ellipsis span:nth-of-type(2){
    flex: 2;
    font-size: 12px;
    text-align: right;
}
</style>