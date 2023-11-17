<script setup>
import {ref} from "vue";

const level=ref(2);

console.log(level.value)


</script>

<template>

<h1>
  <div v-if="level>=1&&level<=2"> [1,2]</div>
  <div v-else-if="level>=3&&level<=6"> [3,6]</div>
  <div v-else>[6,正无穷)</div>
  <br>
  <div v-show="level>=1&&level<=2"> [1,2]</div>
  <div v-show="level>=3&&level<=6"> [3,6]</div>
  <div v-show="level>6">[6,正无穷)</div>
  <br>
  {{level}}
  <input type="text" v-model="level">

<!--  钩子函数，也就是vue实例从生到死的过程-->

<!--  vue 实例创建前后
  beforeCreate 实例创建前
  created    实例创建后
  beforeMount  载入前
  mounted      载入后 这是常用的方法，在页面加载完毕时，发起一步请求，加载数据，渲染页面。
  beforeUpdate  数据更新前
  updated        数据更新后
  beforeUnmount   组件销毁前
  unmounted       组件销毁后-->
</h1>
</template>

<style scoped>

</style>