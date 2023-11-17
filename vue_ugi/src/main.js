/*
1. 初始化vue项目时候所具备的
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/

//2.为引入elementUI 引入的配置
// main.ts
import { createApp } from 'vue'  //导入vue
import ElementPlus from 'element-plus'//引入elmentplus
import 'element-plus/dist/index.css' //引入elementplus 样式
import App from './App.vue' //根组件
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //设置成中文
const app = createApp(App) //创建vue实例


app.use(ElementPlus,{
    locale: zhCn,
})//开始使用element
app.mount('#app')//挂载index.html div#app