<template>
  <div class="app">
    <h3>我是APP组件（祖先）{{name}}--{{price}}</h3>
    <SonIndex/>
  </div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';
  import SonIndex from './components/Son.vue';
  export default {
    name: "App",
    setup() {
      let car = reactive({
        name: '奔驰',
        price: '40W'
      })

      provide('car', car) // 给自己的后代组件传递数据

      return {...toRefs(car)}
    },
    components: { SonIndex }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
