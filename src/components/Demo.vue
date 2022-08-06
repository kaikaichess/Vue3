<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <br/>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <br>
    <h2>学生姓名为：{{person.name}}</h2>
    <h2>学生年龄为：{{person.age}}</h2>
    <button @click="person.name += '~'">修改学生姓名</button>
    <button @click="person.age++">修改学生年龄</button>
    <br>
    <h2>薪资为：{{person.job.j1.salary}}</h2>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
    import { ref, watch, reactive, watchEffect } from 'vue'
    export default {
        name: 'DemoIndex',
        setup() {
            
            let sum = ref(0)
            let msg = ref('hello')
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })
            watch(sum, (newValue, oldValue) => {
                console.log('sum变化了', newValue, oldValue);
            })

            watchEffect(() => {
                const x = sum.value
                console.log('发生变化了');
            })

            return {
                sum,
                msg,
                person
            }
        },
        
    }
</script>

<style>

</style>