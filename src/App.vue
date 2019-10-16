<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <footer-bar></footer-bar> -->
    <router-view name="footer-bar"></router-view>
    
   <!--使用flex布局实现的底部菜单栏
      <ul class="footer-bar">
     <li class="footer-bar-item">
       <router-link to="/">首页</router-link>
    </li>
     <li class="footer-bar-item">
       <router-link to="category">分类</router-link>
      </li>
     <li class="footer-bar-item">
       <router-link to="cart">购物车</router-link>
      </li>
     <li class="footer-bar-item">
       <router-link to="profile">我的</router-link>
      </li>
   </ul> -->
  </div>
</template>

<script>
// import FooterBar from '@components/FooterBar.vue';
export default {
  // components:{
  //   FooterBar
  // }
}
</script>


<style lang="scss">

</style>
