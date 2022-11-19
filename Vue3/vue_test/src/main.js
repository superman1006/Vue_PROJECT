// 该文件是整个项目的入口文件
// 引入Vue
import { createApp } from 'vue'
// 引入App组件
import App from './App.vue'
// 创建Vue实例对象，并且将el:'#app'加入到vm中
createApp(App).mount('#app')
