<template>
   <div>
       <div class="user">
          <div class="username">
                <i class="iconfont icon-person icon-geren">用户名 ：</i>
          </div>
                <p class="userinfo_name" v-if="!userInfo.phone">{{userInfo.name|| '您没有 登录/注册'}}</p>
                <br/>
                <p class="user_phone">
                    <span class="useriphone">
                        <i class="iconfont icon-shouji icon-mobile">手机号 ：</i>
                    </span>
                <span class="userinfo_iphone" else>{{userInfo.phone || '您没有 绑定手机号!'}}</span>
                </p>
       </div>

      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont  icon-shangyiyehoutuifanhui"></i>
      </a>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
     computed:{
      ...mapState(['userInfo'])
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .user
        position absolute
        top 20%
        left 20%
        font-weight bolder
    .username
        margin 0px 20px -18px 0px
    .userinfo_name
        margin 0px 0px 10px 90px
        color green
        font-size 16px
    .user_phone
            margin-top 20px
         .userinfo_iphone
            margin 0px 0px 20px 0px
            color green
            font-size 15px
    .go_back
        position absolute
        top 10px
        left 5px
        width 30px
        height 30px
        >.iconfont
            font-size 28px
            color gray
</style>