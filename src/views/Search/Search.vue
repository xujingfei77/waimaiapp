<template>
  <div class="search">

    <head-top headTitle="搜索"></head-top>

    <form class="search_form">
      <input type="search" placeholder="请输入商家名称" class="search_input"> 
      <input type="submit" class="search_submit">
    </form>
  </div>
</template>
<script>
  // 引入头部组件
  import HeadTop from '../../components/HeadTop.vue'
  export default {
    // 组件映射成标签；驼峰命名法 标签需要加横杠分隔
    components: { 
      HeadTop
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.search
  width 100%
  height 100%
  overflow hidden
  .search_form
    margin-top:45px
    clearFix()
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      outline none
      &.search_input
        float left
        width 78%
        font-size 14px
        padding-left 10px
        color #333
        background #f3f8ff
      &.search_submit
        float right
        width 20%
        font-size 16px
        color #fff
        background-color #116dfe
        font-weight bold

  .list
    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin: 0 auto
    color: #333
    background-color: #fff
    text-align: center
    margin-top: 0.125rem

</style>