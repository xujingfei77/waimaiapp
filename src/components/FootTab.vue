<template>
  <footer class="footer_guide border-1px">
    <!-- 判断当前路径 路径相等时选项高亮 -->
    <div class="guide_item" @click="toggleNav('/home')" :class="{on:'/home'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="toggleNav('/search')" :class="{on:'/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="toggleNav('/order')" :class="{on:'/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" @click="toggleNav('/personal')" :class="{on:'/personal'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    toggleNav(path) {
      this.$router.replace(path)
    }
  },
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      justify-content space-between
      align-items center
      margin 5px
      color #999999
      &.on
        color #116dfe
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>