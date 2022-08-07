import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function() {
    // 实现鼠标“打点”相关数据
    let point = reactive({
        x: 0,
        y: 0
    })
    // 实现鼠标“打点”相关方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(point.x);
    }
    // 实现鼠标“打点”相关生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}

 