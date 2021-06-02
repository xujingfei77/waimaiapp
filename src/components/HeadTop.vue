
<template>
<!-- 
  头部抽取为一个共用的组件；
  头部大体上相同；不同的地方slot插槽占位；
  到使用组件的页面上传入不同的标签
  并添加slot属性指向组件插槽内的name即可
-->

    <!-- 头部 -->
    <header class="header">
      <slot name="headLeft"></slot>
      <a href="javascript:;" class="header_title">{{headTitle}}</a>
      <slot name="headRight"></slot>
    </header>
</template>
<script>
export default {
  // 接收父组件传来的数据
  props: {
    headTitle: String
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  position fixed 
  top 0px
  left 0px
  width 100%
  z-index 99
  height 45px
  display flex 
  align-items center 
  justify-content space-between
  box-sizing border-box
  padding 0 15px
  background #116dfe
  .header_search  
    color:#fff
    font-size 24px
  .header_title
    position absolute 
    left 50%
    transform translateX(-50%)
    color #fff
    font-size 18px
  .header_login
    color:#fff
    font-size 14px
    span
      margin 0 3px
</style>