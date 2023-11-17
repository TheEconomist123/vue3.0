<script setup>



const props = defineProps({
  todo: Object
})

</script>

<template>

  <li> <a :href="todo.url"> {{todo.text}}</a> <br> </li>

</template>

<style scoped>

</style>