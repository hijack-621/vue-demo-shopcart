<template>
   <div class="goods-box">
       <router-link to="/home/goodsinfo/1" tag="div" class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/151005/34/7196/83294/5fb4a9bfE15969ddb/b2dcb8056bd72373.jpg" alt="">
            <h3 class="title">OPPO K7x 双模5G 4800万四摄 5000mAh长续航 90Hz电竞屏 蓝影6GB+128GB</h3>
           <div class="goods-sale">
            <p>
                <span class="price-new">￥666</span>
                <span class="price-old">￥999</span>
            </p>
            <p>
                <span class="">热卖中</span>
                <span class="">剩余66件</span>
            </p>
            </div>
       </router-link>
       <router-link to="/home/goodsinfo/15" tag="div" class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/151005/34/7196/83294/5fb4a9bfE15969ddb/b2dcb8056bd72373.jpg" alt="">
            <h3 class="title">OPPO K7x 双模5G 4800万四摄 5000mAh长续航 90Hz电竞屏 蓝影6GB+128GB</h3>
            <div class="goods-sale">
            <p>
                <span class="price-new">￥666</span>
                <span class="price-old">￥999</span>
            </p>
            <p>
                <span class="">热卖中</span>
                <span class="">剩余66件</span>
            </p>
            </div>
       </router-link>
       <router-link to="/home/goodsinfo/5" tag="div" class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/151005/34/7196/83294/5fb4a9bfE15969ddb/b2dcb8056bd72373.jpg" alt="">
            <h3 class="title">OPPO K7x 双模5G 4800万四摄 5000mAh长续航 90Hz电竞屏 蓝影6GB+128GB</h3>
            <div class="goods-sale">
            <p class="price">
                <span class="price-new">￥666</span>
                <span class="price-old">￥999</span>
            </p>
            <p class="sale">
                <span class="">热卖中</span>
                <span class="">剩余66件</span>
            </p>
            </div>
       </router-link>
       

   </div>
   
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goods-box{
    display:flex;
    flex-wrap: wrap;
    padding:6px;
    justify-content: space-between;
    .goods-item{
        width:46%;
        margin-left:3%;
        margin-top:1%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding:2px;
        display:flex;
        flex-direction:column ;//修改主轴为y轴，并且上下贴边对齐，防止 商品title长度不统一时，<div class="goods-sale"> 容器距离底部有间隙！！！
        justify-content: space-between;
        min-height:326px
        img{
           width:100%; 
        }
        .title{
            font-size:13px;
            line-height: 1.5;
        }
        .goods-sale{
            background-color: #d8dce2;
            p{
                margin:0;
                padding: 5px;
                .price-new{
                    color:red;
                    font-size: 16px;
                    font-weight: bold;
                }
                 .price-old{
                     font-size:12px;
                     margin-left:6px;
                    text-decoration:line-through;//划掉文字的效果
                }
            }
            p:nth-child(2){
                display:flex;
                justify-content: space-between;
                font-size: 13px;

            }
        }
    }
}
</style>