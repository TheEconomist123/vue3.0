<script setup>
import {ref} from 'vue'
import TodoItem from "./TodoItem.vue";

//简单的组件应用
const groceryList = ref([
  {id: 0, text: 'Vegetables',url:"https://baidu.com"},
  {id: 1, text: 'Cheese',url:"https://jd.com"},
  {id: 2, text: 'Whatever else humans are supposed to eat',url:"https://taobao.com"}
])

</script>

<template>
  <!--
  我们给每个 todo 项提供它所表示的 todo 对象，
  以便能够动态展示内容。
  同时还需要给每个组件提供一个“key”，
  这在指南的 v-for 部分有详细解释。
-->
  <ol>
    <TodoItem  v-for="item in  groceryList " :todo="item" :key="item.id">

    </TodoItem>
  </ol>

</template>

<style scoped>

</style>