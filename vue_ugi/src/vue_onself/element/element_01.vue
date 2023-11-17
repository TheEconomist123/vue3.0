<template>


  <el-row class="mb-4">
    <el-button @click="forbiddenMultiClick" >Default</el-button>
    <el-button type="primary">Primary{{downloadFlag}}</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info" loading="true" size="large">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>





</template>

<script lang="ts" setup>


import {ref} from "vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const downloadFlag=ref(1);
function  forbiddenMultiClick(){
  debugger;
  if (downloadFlag.value===1){
    console.log("可以下载")
  }else {
    alert("禁止10s内连续点击下载");
    return;
  }

  downloadFlag.value=2;
  setTimeout(()=>{downloadFlag.value=1},10000)
}

</script>
