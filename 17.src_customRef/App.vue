<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
  import { customRef } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 使用vue提供的内置的ref
      // let keyWord = ref('hello')
      // 使用程序员自定义的ref
      function myRef(value) {
        return customRef((track, trigger) => {
          return {
            get() {
              track() // 通知Vue追踪数据的变化
              return value
            },
            set(newValue) {
              value = newValue
              trigger() // 通知Vue去重新解析模板
            }
          }
        })
      }
      let keyWord = myRef('hello')
      
      return {
        keyWord
      }
    }
  }
</script>

<style>

</style>
