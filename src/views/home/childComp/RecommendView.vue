<template>
  <div id="recommend-view">
    <div class="item" v-for="(item, index) in recommends" :key="index">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommondView',
    props: {
      recommends: {
        type: Array,
        default: function() {
          return []
        }
      },
    },
  }
</script>

<style scoped>
  #recommend-view {
    float: left;
    width: 100%;
    border-bottom: #ccc solid 3px;
  }
  .item {
    float: left;
    font-size: 14px;
    text-align: center;
    width: 25%;
  }
  .item img {
    width: 65px;
    height: 65px;
  }
</style>