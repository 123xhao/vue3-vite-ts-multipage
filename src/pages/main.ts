import { createApp } from 'vue'
import Antd from 'ant-design-vue';// 全局导入antd组件
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';// 全局导入antd样式
// import router from './router/router'

const app = createApp(App)

// app.use(router)
app.use(Antd);// app挂载组件及样式
app.mount('#app')
