<template>
  <div class="home">

    <!-- 头部组件标签 -->
    <head-top headTitle="饱了没外卖">
       <a href="#/search" class="header_search iconfont icon-sousuo" slot="headLeft"></a>
      <a href="#/login" class="header_login" slot="headRight">登录<span>|</span>注册</a>
    </head-top>

    <!-- 导航栏 -->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span class="swiper-pagination-bullet"></span>
        </div>
      </div>
    </nav>
    <!-- 商家列表 -->
    <div class="home_shop_list border-1px" style="pointer-events: auto;">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i> 
        <span class="shop_header_title">附近商家</span>
      </div> 
      <!-- 列表末班 -->
      <home-list></home-list>
    </div>
  </div>
</template>
<script>
  // 引入头部组件
  import HeadTop from '@/components/HeadTop.vue'
  import HomeList from '../../components/HomeList/HomeList.vue'
  // 引入swiper相关
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted() {
      // 创建一个swiper实例对象，来实现轮播
      new Swiper('.swiper-container',{
        loop: true, //循环轮播
        pagination: { // 分页器
          el: '.swiper-pagination'
        }
      })
    },
    // 组件映射成标签；驼峰命名法 标签需要加横杠分隔
    components: { 
      HeadTop,
      HomeList,
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    height 100%
    .home_nav
      /* bottom-border-1px(#e4e4e4) */
      height 200px
      background #fff
      margin-top 45px
      padding-top 10px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #116dfe
    .home_shop_list
      position: relative
      margin-top: 10px
      .shop_header
        height 40px
        padding 0 10px
        background: #fff
        .icon-xuanxiang
          color #116dfe
          font-weight bold
          font-size 18px
          line-height 40px
        span 
          font-size 15px
          color #555
          line-height 40px
    

</style>