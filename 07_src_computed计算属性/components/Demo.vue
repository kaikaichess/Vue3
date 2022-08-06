<template>
    <h1>个人信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br/>
    名: <input type="text" v-model="person.lastName">
    <h2>全名：{{person.fullName}}</h2>
    全名：<input type="text" v-model="person.fullName">
</template>

<script>
    import {reactive, computed} from 'vue'
    export default {
        name: 'DemoIndex',
        setup() {
            let person = reactive({
                firstName: '张',
                lastName: '三'
            })

            // 计算属性，简写形式（计算属性不可读写）
            // person.fullName = computed(() => {
            //     return person.firstName + person.lastName
            // }) 

            // 计算属性，完整写法（可以设置计算属性是否可读写）
            person.fullName = computed({
                get() {
                    return person.firstName + '-' + person.lastName
                },
                set(value) {
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.lastName = nameArr[1]
                }
            }) 

            return {
                person,
            }
        },
        
    }
</script>

<style>

</style>