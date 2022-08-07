<template>
    <div class="child">
        <h3>我是Child组件（孙）{{name}}--{{price}}</h3>
    </div>
</template>

<script>
    import { inject, toRefs } from 'vue'
    export default {
        name: 'ChildIndex',
        setup() {
            let car = inject('car')
            return {...toRefs(car)}
        }
    }
</script>

<style>
    .child {
        background-color: orange;
        padding: 10px;
    }
</style>
