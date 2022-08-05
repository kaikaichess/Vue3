<template>
  <h1>个人信息</h1>
  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <button @click="sayHello">你好</button>
</template>

<script>

export default {
  name: 'App',
  // 测试setup
  setup() {
    let name = '张三'
    let age = 18
    function sayHello() {
      console.log(`你好，我是${name},我今年${age}岁了`);
    }

    return {
      name,
      age,
      sayHello
    }

  },
}
</script>

<style>

</style>
