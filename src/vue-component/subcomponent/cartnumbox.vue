<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" readonly  :value="bnum" ref="inum" @change="numchange" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		
        </div>
    </div>
</template>

<script>
import mui from '../../../lib/js/mui.min.js'
export default {
   mounted() {
       mui('.mui-numbox').numbox()
       //console.log(this.max) 这个max为父组件异步获取到然后传给子组件的，因为是异步操作，所有有可能这个值还没拿到，
       //然后就赋值给自己data上的stock值就传给子组件了，这样就可能出现加入购物车的数量大于库存，因为 最大值max 该情况下为undefined，也就是没有上限！！！
       //解决方案就是 监听这个 max值的变化，然后赋值给 data-numbox-max 这个属性
       //mui 提供了 js方式去修改 这个 numbox 的最大值属性！！！

       //初始化mui 中的 numbox组件，让点击组件，数字可以加减
   }, 
//    props:['stock'],
//    watch:{
//        'stock':function (newval, oldval) {
//            //console.log(newval)
//             mui('.mui-numbox').numbox().setOption('max', newval)//通过js 方式将监听到的最终拿到的最大值赋值给 mui numbox 的 【data-numbox-max】上限这个属性
//        }
//    },
   methods: {
       numchange(){//getcount为父组件中调用numbox上绑定的事件函数的名称
        //    this.$emit('getcount',parseInt(this.$refs.inum.value))
        //    //$emit 触发父组件在调用子组件【组件标签上】上定义的事件函数，第一个参数为事件函数名称，第二个为传值给这个事件函数
        //console.log(this.$refs.inum)
        this.$store.commit('updatecart', { "id":this.id, "count":this.$refs.inum.value })
      }
   },
   props:['bnum','id']
}
</script>

<style lang="scss" scoped>

</style>