<template>
  <div class="control-tab">
    <div v-for="(item, index) in titles" 
      :key="index" class="control-tab-item" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ControlTab',
    props: {
      titles: {
        type: Array,
        default: function() {
          return []
        }
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    },
  }
</script>

<style scoped>
  .control-tab {
    display: flex;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .control-tab-item {
    flex: 1;
  }

  .control-tab-item span {
    padding: 4px;
  }
  
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>