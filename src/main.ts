import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"
// import "@/utils/rem"; // 移动端适配的话需要引入并且vite.config.ts文件里的 postCssPxToRem 方法也要打开
import Pinia from "@/store"

const app = createApp(App);

app.use(Pinia)
app.use(router)
app.mount('#app')
