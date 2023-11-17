<script setup>

//测试属性绑定
import  {ref} from "vue"

import axios from "axios";


const message=ref("hello world")
const  isRed=ref(true)
const  color=ref('green')
function  toggleRed(){
  isRed.value=!isRed.value;
}
function toggleColor(){
  color.value=color.value==='green'?'blue':'green';
}

</script>

<template>
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </p>

<!--  属性绑定支持对象个数组-->
  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>
  <!-- 样式绑定也支持对象和数组 -->
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>

</template>

<style scoped>
.red{
  color: red;
}

</style>