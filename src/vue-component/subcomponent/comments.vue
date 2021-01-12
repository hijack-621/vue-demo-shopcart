<template>
    <div class="cmt-box">
       <h4>评论区:</h4>
        <hr>
        <textarea placeholder="请输入此刻想说的话(最多输入150字)" maxlength="150" v-model="cmt"></textarea>
        <mt-button type="primary" size="large" @click="launchcmt">发表评论</mt-button>

        <div class="cmt-list" v-for="item in dcmtlist.slice(0,num)" :key="item.id">
            <div class="cmt-floor">
                第{{ item.id }}楼&nbsp;&nbsp; 用户:{{ item.username }}&nbsp;&nbsp;发表时间:{{ item.pb_time}}
            </div>
            <div class="cmt-content">
                {{ item.content}}
            </div>
        </div>
         <mt-button plain type="danger" size="large" v-if="num<length" @click="loadmore">加载更多</mt-button>
         <mt-button v-else plain type="danger" size="large" >没有更多了</mt-button>
          

    </div>

</template>

<script>
import icmtlist from '../../comments.json'
import moment from 'moment'
import { Toast } from 'mint-ui';

//导入自己模拟的评论列表信息
//console.log(cmtlist)
export default {
    data(){
        return {
            num:10,
            dcmtlist:[],
            length:icmtlist.message.length,
            cmt:'',
        }
    },
    created() {
       this.dcmtlist =  icmtlist.message;
    },
    methods:{
        launchcmt(){
            // console.log(this.lcmt)'
            if(this.cmt!==''){
                let lcmt = {}
                lcmt.username="游客"
                lcmt.id = this.length+1;
                lcmt.pb_time =moment().format('YYYY-MM-DD')
                lcmt.content = this.cmt
                this.dcmtlist.unshift(lcmt)
                this.num++
                this.length++
                this.cmt = ""
                //这里只是页面的数据暂时被更新了，实际的comments.json文件还是不变！！！
            }else{
                Toast('评论不能为空，请输入文字后在发表')
            }
            
        },
        loadmore(){
            this.num+=10;
        }
    },


}
</script>

<style lang="scss" scoped>
.cmt-box{
    h4{
        font-size:15px;
    }
    textarea{
        height:85px;
        margin:0;
    }
    .cmt-list{
        .cmt-floor{
            background-color: #aeafb8;
            line-height: 35px;
            text-indent: 1em;
            
        }
        .cmt-content{
            line-height: 35px;
            text-indent: 1em;
            
        }
    }

}
</style>