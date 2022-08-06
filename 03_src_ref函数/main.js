// 引入的不再是Vue构造函数，而是createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象app(类似Vue2中的vm，但app比vm更“轻”)并挂载app
createApp(App).mount('#app')
