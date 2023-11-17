<script setup>


import {ref} from "vue";

const show = ref(true);
const list = ref([1, 2, 3, 4, 5]);
/*
js 里面 0 默认就是false  非0 默认就是true
if(-2){
  console.log("非空")
}else{
  console.log("空数组。。。。。")
}
*/

</script>

<template>
  <button @click="show=!show"> toggle list</button>
  <button @click="list.push(list.length+1)"> Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>
  <ul v-if="show&&list.length">
    <li v-for="item of list ">{{ item }}</li>
  </ul>
  <p v-else-if="list.length"> list is not empty ,but hidden.</p>
  <p v-else> List is empty </p>


</template>

<style scoped>

</style>