<template>
   <div class='cart-box'>
        <div class="cart">
            <div class="mui-card" v-for="item in ($store.state.cart) " :key="item.id">
                <div class="mui-card-header">购物车</div>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                                <!-- mt-switch 官方api提供了 一个change事件用于监听 开关的 on 和off ,v-model 数据双向绑定，所以下面change事件可以直接传v-model绑定的数据！！！,就可以实现将开关的状态同步到$store仓库中去-->
                            <mt-switch v-model="$store.getters.getcartstatus[item.id]" @change="schange(item.id, $store.getters.getcartstatus[item.id])"></mt-switch>
                            <img src="https://img.alicdn.com/bao/uploaded/i2/405119695/O1CN01EVQhTZ2LUMRaOIZBw-405119695.jpg_80x80.jpg" alt="">
                            <div class="cartinfo">
                                <h3>特步篮球鞋男2020秋季新品舒适运动球鞋防滑耐磨高帮篮球文化鞋子</h3>
                                <p>
                                    <span>￥{{ item.price }}</span>
                                    <cartnumbox :bnum="item.count" :id="item.id"></cartnumbox>
                                    <a href="#" @click.prevent="delgoods(item.id)">删除</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            
            


            </div>
         

            <div class="pay">
                <div class="mui-card">
                    <div class="mui-card-header">总计栏</div>
				        <div class="mui-card-content">
					        <div class="mui-card-content-inner">
                                <p>总计(不含运费)</p>
                                <div class='lpay'>
                                    <p>已勾选商品<span class="red">{{ $store.getters.calc.count}}</span>件,&nbsp;总价<span class='red'>￥{{ $store.getters.calc.price}}</span></p>
                                    <mt-button type="danger">去结算</mt-button>
                                </div>
					    </div>
				    </div>
			    </div>  
            </div>
    </div> 
</template>
<script>
import cartnumbox from './subcomponent/cartnumbox.vue'

export default {
    components:{
        
        cartnumbox
    },
    methods:{
        delgoods(id){
            this.$store.commit('delgoods', {"id":id})
        },
        schange(id, stauts){
            this.$store.commit('updatestatus', {"id":id,"selected":stauts})
        }
    }
}
</script>
<style lang='scss' scoped>
.cart-box{
    background-color: #ccc;
    overflow: hidden;
}
.cart{
    .mui-card-content-inner{
    display: flex;
    align-items: center;
    p{
        display:flex;
    }
    img{
        width:65px;
        height:auto;
        padding:0 5px;
    }
}
}

.cartinfo{
    display:flex;
    flex-direction: column;
    h3{
        font-size:13px;
    }
    span{
        line-height:35px;
        margin-right: 5px;
        color:red;
        font-weight: bold;
    }
    a{
        line-height:35px;
        margin-left:5px;
    }
}
.lpay{
    display:flex;
    justify-content:space-between;
    align-items: center;
    p{
        margin:0;
        .red{
            color:red;
            font-size:16px;
            font-weight:bold;
        }
    }
}
</style>