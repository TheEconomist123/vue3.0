<script setup>
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'
import axios from "axios";

import {ref} from "vue";

const downflag = ref(1)
const  reportId=ref("1242354923561")

const excel = ref();

function downloadAndPreview() {
  fetch('http://127.0.0.1:8089/easyexcel/download', {
    method: 'post',
    reportId: "131231232",
    id: "1231232"
  }).then(res => {
    //读取文件的arrayBuffer
    res.arrayBuffer().then(res => {
      excel.value = res
    })

  })
}

async function downloadFile() {

  if (downflag.value === 2) {
    alert("你已经点击下载，请勿重复点击");
    return;
  }
  downflag.value = 2;
  try {
    const response = await axios.get('http://127.0.0.1:8089/easyexcel/download?reportId='+reportId.value, {
      responseType: 'blob' // 设置响应数据类型为blob
    });

    // 创建blob URL用于下载文件
    const blob = new Blob([response.data], {type: response.headers['content-type']});
    const url = window.URL.createObjectURL(blob);

    // 创建一个虚拟的<a>元素并触发点击以下载文件
    const a = document.createElement('a');
    a.href = url;
    a.download = '贴现明细查询.xlsx'; // 设置下载文件的名称
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 释放blob URL
    window.URL.revokeObjectURL(url);
    downflag.value = 1;
    console.log("释放下载标志：" + downflag)

  } catch (error) {
    console.error(error);
  }
}

</script>
<template>
  <div>
    <button @click="downloadAndPreview">下载预览</button>
    <button @click="downloadFile">下载文件</button>
  </div>
  <div>
    <vue-office-excel
        :src="excel"
        style="height: 100vh;width: 1000vh"
        @rendered="renderedHandler"
        @error="errorHandler"
    />
  </div>

</template>
