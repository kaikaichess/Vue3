<template>
  <DemoIndex v-if="isShow"/>
  <button @click="isShow = !isShow">切换</button>
</template>

<script>
  import {ref} from 'vue'
  import DemoIndex from './components/Demo.vue'
  export default {
    name: 'App',
    components: {DemoIndex},
    setup() {
      let isShow = ref(true)
      return {
        isShow
      }
    }
  }
</script>

<style>

</style>
