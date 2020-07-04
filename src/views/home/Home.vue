<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <h3>首页</h3>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <control-tab class="tab-control" :titles="['人气', '推荐', '活跃']"></control-tab>
    <ul>
      <li class="item1"></li>
      <li class="item2"></li>
      <li class="item3"></li>
      <li class="item4"></li>
      <li class="item5"></li>
      <li class="item6"></li>
      <li class="item7"></li>
      <li class="item8"></li>
      <li class="item9"></li>
      <li class="item10"></li>
    </ul>
  </div>
</template>

<script>

// import NavBar from '../../components/common/navbar/NavBar.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import ControlTab from 'components/content/ControlTab.vue'

import { getMultidata } from 'network/home'


  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      ControlTab
    },

    created () {
      getMultidata().then(res => {
        console.log(res.data);
        
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control {
    position: sticky;
  }
</style>