<template>
    <div>
        <h3>这是id为 {{ id }}商品的详细参数页</h3>
    </div>
</template>

<script>
export default {
     data(){
        return {
            id:this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>

</style>