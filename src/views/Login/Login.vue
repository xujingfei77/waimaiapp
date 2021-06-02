<template>
<div class="loginContainer">
  <div class="login_bg">
    <span href="javascript:" class="go_back" @click="$router.back()">
      <i class="iconfont icon-jiantou2"></i>
    </span>
  </div>

  <div class="loginInner">
    <div class="login_header">
      <h2 class="login_logo">登录享受更多优惠</h2>
      <div class="login_header_title">
        <a href="javascript:;" class="">短信登录</a> 
        <a href="javascript:;" class="on">密码登录</a>
      </div>
    </div> 
    <div class="login_content">

      <form >
        <div class="">
          <section class="login_message">
            <input type="tel" maxlength="11" placeholder="手机号"> 
            <button class="get_verification">获取验证码</button>
          </section> 
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="验证码">
          </section> 
          <section class="login_hint">
            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
            <a href="javascript:;">《用户服务协议》</a>
          </section>
        </div> 

        <div class="on">
          <section >
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
            </section> 
            <section class="login_verification">
              <input type="password" placeholder="密码"> 
              <div class="switch_button off">
                <div class="switch_circle"></div> 
                <span class="switch_text"></span>
              </div>
            </section> 
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="验证码"> 
              <img src="./images/captcha.svg" alt="captcha" class="get_verification">
            </section>
          </section>
        </div> 
        <input type="submit" value="登录" class="login_submit">
      </form> 
      
      </div> 
  </div> 
  <a href="javascript:;" class="about_us">关于我们</a>
</div>
</template>
<script>
export default {
  
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.loginContainer
  position fixed 
  top 0
  left 0
  width 100%
  height 100%
  background #fff
  padding-bottom 40px
  .login_bg
    height:60%
    background linear-gradient(#116dfe,#fff)
    .go_back
      width 100%
      height 45px
      color #fff
      font-size 16px
      > .iconfont
        margin-left 15px  
        font-size 20px
        line-height 45px
  .loginInner
    position fixed 
    top 50%
    left 50%
    width 94%
    height 65%
    box-sizing border-box
    padding 40px 30px 0
    transform translate(-50%,-50%)
    background #fff
    border-radius 10px
    box-shadow 0 0 20px 0 rgba(0,0,0,.1) 

    .login_header
      .login_logo
        font-size 20px
        font-weight bold
        color #333
        text-align center
        font-family Helvetica 
      .login_header_title
        padding-top 30px
        text-align center
        > a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #116dfe
            /* font-weight bold */
            border-bottom 2px solid #116dfe
    .login_content
      margin-top 30px
      > form
        > div
          display none
          &.on
            display block
          input
            width 100%
            height 42px
            padding-left 20px
            outline 0
            font 400 14px Arial
            box-sizing border-box
            background rgba(0,0,0,0)
            &:focus
              border 1px solid rgba(17,109,254,0.5)
              border-radius 21px
              background #fff
          .login_message
            position relative
            margin-top 25px
            background #f8f8f8
            // height 42px
            font-size 14px
            border-radius 21px
            .get_verification
              position absolute
              width 94px
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone_number
                color #000
          .login_verification
            position relative
            margin-top 16px
            background #f8f8f8
            // height 42px
            font-size 14px
            border-radius 21px
            .switch_button
              font-size 12px
              border 1px solid #d9e9ff
              border-radius 10px
              transition background-color .3s, border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #116dfe
              > .switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #87b6ff
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                transition transform .3s
                &.right
                  transform translateX(27px)

          .login_hint
            margin-top 20px
            color #999
            font-size 14px
            line-height 24px
            padding 0 5px
            > a
              color #116dfe
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 21px
          background rgba(17 ,109 ,254 ,.5)
          color #fff
          text-align center
          font-size 18px
          line-height 42px
          border 0
  .about_us
    position fixed 
    width 100%
    bottom 40px
    left 0
    display block
    font-size 12px
    margin-top 20px
    text-align center
    color #777

</style>