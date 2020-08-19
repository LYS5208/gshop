<template>
   <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
  
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodCategorys} from './api'
export default {
    mounted (){
     // this.$store.dispatch('getAddress')
     this.getAddress()
     this.getUserInfo()
    },
    methods:{
    ...mapActions(['getAddress','getUserInfo'])
    },
    components:{
        FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>