<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <h3>首页</h3>
      </template>
    </nav-bar>
    
  </div>
</template>

<script>

// import NavBar from '../../components/common/navbar/NavBar.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
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
      NavBar
    },

    created () {
      getMultidata().then(res => {
        // this.banners = res.data.banner.list
      })
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>