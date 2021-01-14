<template>
    <div>
        <h3>这是id为 {{ id }}商品的评论页</h3>
        <comment></comment>
    </div>
</template>

<script>
import comment from './comments.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
     components:{
        comment
    }
}
</script>

<style lang="scss" scoped>

</style>