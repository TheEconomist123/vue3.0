<script setup>
import {ref} from "vue"

const message = ref("Hello World!")

function  reverseMessage(){
  message.value=message.value.split('').reverse().join('')
}

function notify(){
  alert("测试时间冒泡，例如在a标签上支持点击，自定义事件，但是不会触发a标签自己携带click事件，进行跳转。");
}

</script>

<template>

  {{message}}
  <button @click="reverseMessage">Reverse Message</button>
<!--  内联表达式-->
  <button @click="message += '!'">Append "!"</button>

  <a href="https://vuejs.org" @click.prevent="notify">
    仅仅是提醒但是不去 https://vuejs.org
  </a>


</template>

<style scoped>
button, a {
  display: block;
  margin-bottom: 1em;
}
</style>