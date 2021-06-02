<template>
  <div class="order">
    <head-top headTitle="订单列表"></head-top>
    <section class="order_no_login">
      <img src="./images/person.png"> 
      <h3 >登录后查看外卖订单</h3> 
      <button >立即登陆</button>
    </section>
  </div>
</template>
<script>

import HeadTop from '../../components/HeadTop.vue'
  export default {
  components: { 
    HeadTop 
  },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.order
  width 100%
  height 100%
  .order_no_login
    padding-top 140px
    width 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      font-size 16px
      color #444
      font-family Arial, Helvetica, sans-serif
      margin-bottom 15px
    >button
      display inline-block
      background #116dfe
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 3px
      padding 8px 20px

</style>