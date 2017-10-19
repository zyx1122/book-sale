<template>
  <div>
    <div class="tabs">
      <ul>
        <router-link :to="{name: 'Home'}" tag="li" exact>
          <div><img src="../assets/images/home.svg"></div>
          <div>首页</div>
        </router-link>
        <router-link :to="{name: 'Cart'}" tag="li" exact>
          <div><img src="../assets/images/cart.svg"></div>
          <div>购物车</div>
        </router-link>
        <router-link :to="{name: 'Explorer'}" tag="li" exact>
          <div><img src="../assets/images/explorer.svg"></div>
          <div>分类</div>
        </router-link>
        <router-link :to="{name: 'Me'}" tag="li" exact>
          <div><img src="../assets/images/me.svg"></div>
          <div>我的</div>
        </router-link>
      </ul>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import './tabs.less';
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }
</style>