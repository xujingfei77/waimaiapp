<template>
  <section class="profile">
    <!-- 头部组件 -->
    <head-top headTitle="个人中心"></head-top>

    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div> 
        <div class="user-info">
          <p class="user-info-top">登录/注册</p> 
          <p class="tel">
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span> 
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div> 
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span >0.00</span>元</span> 
          <span class="info_data_bottom">我的余额</span>
        </a> 
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span >0</span>个</span> 
            <span class="info_data_bottom">我的优惠</span>
        </a> 
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span >0</span>分</span> 
            <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section> 
    <section class="profile_my_order border-1px">
      <a href="javascript:" class="my_order">
        <span >
          <i class="iconfont icon-order-s"></i>
        </span> 
        <div class="my_order_div">
          <span >我的订单</span>
           <span class="my_order_icon">
             <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a> 
      <a href="javascript:" class="my_order">
        <span >
          <i class="iconfont icon-jifen"></i>
        </span> 
        <div class="my_order_div">
          <span >积分商城</span> 
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a> 
      <a href="javascript:" class="my_order">
        <span >
          <i class="iconfont icon-vip"></i>
        </span> 
        <div class="my_order_div">
          <span >饱了没外卖会员卡</span> 
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section> 
    <section class="profile_my_order border-1px">
      <a href="javascript:" class="my_order">
        <span >
          <i class="iconfont icon-fuwu"></i>
        </span> 
        <div class="my_order_div">
          <span >服务中心</span>
          <span class="my_order_icon">
             <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section> <!---->
  </section>
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
@import "../../common/stylus/mixins.styl"
.profile //我的
  width 100%
  overflow hidden
  .profile-number
    margin-top 45px
    border-top solid 1px #2479ff
    .profile-link
      clearFix()
      position relative
      display block
      background #116dfe
      padding 20px 10px
      color #ccc
      .profile_image
        display flex 
        align-items center 
        justify-content center
        float left
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        vertical-align top
        background #fff
        .icon-person
          color #ccc
          font-size 34px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-size 18px
          color #fff
          &.user-info-top
            padding-bottom 12px
        .tel
          display flex 
          align-items center 
          justify-content space-between
          .user-icon
            display inline-block
            margin-left -15px
            margin-right 10px
            width 20px
            .icon-mobile
              font-size 26px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
            transform translateY(-1px)
            color #fff
      .arrow
        width 12px
        height 12px
        position absolute
        right 15px
        top 40%
        .icon-jiantou1
          color #fff
          font-size 5px
  .profile_info_data
    // bottom-border-1px(#e4e4e4)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      display flex 
      justify-content space-between
      .info_data_link
        float left
        width 33%
        text-align center
        padding 15px 0
        /* border-right 1px solid #f1f1f1 */
        .info_data_top
          display block
          width 100%
          font-size 14px
          color #333
          margin-bottom 6px
          span
            position relative
            display inline-block
            font-size 20px
            font-weight bold
            color #333!important
            line-height 30px
            margin-right 3px
            transform translateY(1px)
        .info_data_bottom
          display inline-block
          font-size 14px
          color #555
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .profile_my_order
    width 96%
    border-radius 5px
    margin 10px auto 0
    margin-top 10px
    background #fff
    .my_order
      display flex
      align-items center
      padding-left 15px
      border-bottom 1px solid #f9f9f9
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 26px
        .icon-order-s
          color #116dfe
          font-size 32px!important
        .icon-jifen
          color #116dfe
          font-size 36px!important
          transform translateX(-4px)
        .icon-vip
          color #116dfe
        .icon-fuwu
          color #116dfe
      .my_order_div
        flex 1
        width 100%
        padding 18px 10px
        font-size 14px
        color #333
        display flex
        justify-content space-between
        span
          display inline-block
        .my_order_icon
          float right
          width 10px
          height 10px
          .icon-jiantou1
            color #bbb
            font-size 10px
    .logout
      width 100%

</style>