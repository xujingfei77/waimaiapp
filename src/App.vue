<template>
  <div id="app">
    <router-view></router-view>
    <!-- 路由元信息标识哪些页面需要页脚 -->
    <foot-tab v-show="$route.meta.footShow"></foot-tab>
  </div>
</template>
<script>
import FootTab from './components/FootTab.vue'
export default {
  mounted() {
    console.log(this.$route)
  },
  components: {
    FootTab //映射组件
  }
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #fff!important
</style>