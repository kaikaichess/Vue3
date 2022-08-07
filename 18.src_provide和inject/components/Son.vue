<template>
    <div class="son">
        <h3>我是Son组件（子）</h3>
        <ChildIndex/>
    </div>
</template>

<script>
    import ChildIndex from './Child.vue';
    export default {
    name: "SonIndex",
    components: {ChildIndex},
    setup() {
    },
}
</script>

<style>
    .son {
        background-color: skyblue;
        padding: 10px;
    }
</style>
