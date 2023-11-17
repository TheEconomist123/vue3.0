<script setup>
import {ref, onMounted} from 'vue'
import axios from "axios";
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'
// reactive state
const count = ref(5)
const count1 = ref("国家民族")
const info =ref("周政之");
const  excel=ref("");


const instance = axios.create({
  baseURL: 'http://127.0.0.1:8089/', // 或者 baseURL: null
  // 可以在这里添加其他配置，如拦截器、headers等
});

// functions that mutate state and trigger updates
function increment() {
  count.value++
}
function  previewExcel(){
  instance.get('easyexcel/').then(function (response) {
    info.value=response.data;
    console.log("数据111：" + response.data)
  }).catch(function (error) {
    console.log("print error info" + error)
  })
}

function downloadExcel() {
  instance.get('easyexcel/getVueString').then(function (response) {
    info.value=response.data;
    console.log("数据111：" + response.data)
  }).catch(function (error) {
    console.log("print error info" + error)
  })

}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})


</script>

<template>

  <button @click="increment">Count is: {{ count }}--{{ count1 }}{{ info }}</button>
  <button @click="downloadExcel">点击下载文件</button>
  <button @click="previewExcel">点击预览excel</button>
  <br>
  <vue-office-excel
      :src="excel"
      style="height: 10vh;"
      @rendered="renderedHandler"
      @error="errorHandler"
  />
</template>