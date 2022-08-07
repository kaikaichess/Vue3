<template>
    <h4>当前的x是：{{x}}</h4>
    <button @click="x++">点我x+1</button>
    <hr/>
    <h4>{{person}}</h4>
    <h2>学生姓名为：{{name}}</h2>
    <h2>学生年龄为：{{age}}</h2>
    <button @click="name += '~'">修改学生姓名</button>
    <button @click="age++">修改学生年龄</button>
    <br>
    <h2>薪资为：{{job.j1.salary}}</h2>
    <!-- <button @click="salary++">涨薪</button> -->
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
    import { reactive, toRefs, shallowRef } from 'vue'
    export default {
        name: 'DemoIndex',
        setup() {
            // let person = shallowReactive({ // 只考虑第一层数据的响应式
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            let x = shallowRef(0) // shallowRef不去处理对象形式的数据(ref会处理)
            

            return {
                // name: toRef(person, 'name'),
                // age: toRef(person, 'age'),
                // salary: toRef(person.job.j1, 'salary'),
                ...toRefs(person),
                x
            }
        },
        
    }
</script>

<style>

</style>