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
    import { ref } from 'vue'
    import {watch} from 'vue'
    import { reactive } from 'vue'
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
            // 情况一~监视ref所定义的一个响应式数据
            // watch(sum, (newValue, oldValue) => {
            //     console.log('sum的值变化了', newValue, oldValue);
            // }, {immediate: true}) 
            // 情况二~监视ref所定义的多个响应式数据
            // watch([sum, msg], (newValue, oldValue) => {
            //     console.log('sum或者msg改变了', newValue, oldValue);
            // }, {immediate: true})
            /* 
                情况三~监视reactive所定义的一个响应式数据中的全部属性
                    1.注意此处无法正确的获取oldValue
                    2.注意会强制开启深度监视(deep配置无效)
             */
            // watch(person, (newValue, oldValue) => {
            //     console.log('person变化了', newValue, oldValue);
            // })
            // 情况四~监视reactive所定义的一个响应式数据中的某一个属性
            // watch(() => person.name, (newValue, oldValue) => {
            //     console.log('person中的name变化了', newValue, oldValue);
            // })
            // 情况五~监视reactive所定义的一个响应式数据中的某些属性
            // watch(() => [person.name,person.age], (newValue, oldValue) => {
            //     console.log('person中的name或age变化了', newValue, oldValue);
            // })
            // 特殊情况,监视reactive所定义的对象中的某个对象属性，所以deep配置有效
            watch(() => person.job, (newValue, oldValue) => {
                console.log('person中的job变化了', newValue, oldValue);
            }, {deep: true})


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