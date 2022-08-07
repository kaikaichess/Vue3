<template>
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
    import { reactive, toRef, toRefs } from 'vue'
    export default {
        name: 'DemoIndex',
        setup() {
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            })

            

            return {
                // name: toRef(person, 'name'),
                // age: toRef(person, 'age'),
                // salary: toRef(person.job.j1, 'salary'),
                ...toRefs(person)
            }
        },
        
    }
</script>

<style>

</style>